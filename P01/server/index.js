const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const ip = require('ip');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('client'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
});

server.listen(3000, () => {
  console.log(`Server online at http://${ip.address()}:3000`);
});