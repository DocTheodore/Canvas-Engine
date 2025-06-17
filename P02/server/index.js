import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import ip from 'ip';
import path from 'path';
import { fileURLToPath } from 'url';

import Colors from '../client/shared/colors.js';
import Vector from '../client/shared/vector.js';
import SetupEvents from './events.js';
import { GlobalTileMap } from './world/tilemap.js';

// Simulando __dirname no ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir arquivos da pasta 'client'
app.use(express.static('client'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// =============================
// Gerenciamento de playerId
// =============================

const MAX_PLAYERS = 20;
const players = {};
const idPool = Array.from({ length: MAX_PLAYERS }, (_, i) => i + 1);

function assignPlayerId() {
  return idPool.shift();
}

function releasePlayerId(id) {
  if (typeof id === 'number' && !idPool.includes(id)) {
    idPool.push(id);
    idPool.sort((a, b) => a - b);
  }
}

// =============================
// Conexão principal
// =============================

io.on('connection', (socket) => {
  if (idPool.length > 0) {
    const newId = assignPlayerId();
    players[socket.id] = {
      playerId: newId,
    };

    console.log(`[Servidor] Jogador conectado: ${socket.id}, ID: ${newId}`);
    socket.emit('connectionSuccess', newId);

    io.emit('playerlog', players);
    socket.emit('mapState', GlobalTileMap.exportAllTiles());

    SetupEvents(socket, io, players);
  } else {
    console.log('[Servidor] Conexão recusada: máximo de jogadores atingido');
    socket.emit('serverFull');
    socket.disconnect(true);
  }

  socket.on('playerInput', (data) => {
    console.log(`[Servidor] Input de ${socket.id}:`, data);
  });

  socket.on('disconnect', () => {
    if (players[socket.id]) {
      const id = players[socket.id].playerId;
      releasePlayerId(id);
      delete players[socket.id];
    }
    console.log(`[Servidor] Jogador saiu: ${socket.id}`);
    io.emit('playerlog', players);
  });

});

server.listen(3000, () => {
  console.log(`Server online at http://${ip.address()}:3000`);
});
