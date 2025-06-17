import { tiles } from "../core/tile.js";
import { TILE_PX } from "../shared/sys_var.js";
import Vector from "../shared/vector.js";

export const socket = io();
export const netdata = {
    myId: 0,
    tileMap: new Map(),
}

// Lidar com a conexão
socket.on('connect', () => {
    console.log('[Cliente] Servidor encontrado');
});
socket.on('connectionSuccess', (id) => {
    console.log('[Cliente] Entrando com ID: ', id);
    netdata.myId = id;
});
socket.on('serverFull', () => {
    console.log('[Cliente] Conexão recusada, servidor lotado');
});

// ===============================
// Eventos do Socket
// ===============================

socket.on('playerlog', (players) => { // Mostrar lista atualizada de players online no chat
    console.table(players);
});

socket.on('renderTile', makeTile); // Renderizar um tile na tela

socket.on('mapState', (tileData) => { // Renderizar todos os tiles vindos do servidor na tela
    tileData.forEach(makeTile);
})

// ===============================
// Funções de Lógica de dados
// ===============================

function makeTile(tile) { // Lógica de colocar um tile na lista de renderização
    const key = `${tile.pos.x},${tile.pos.y}`;
    const vectorPos = new Vector(tile.pos.x, tile.pos.y).scal(TILE_PX);

    netdata.tileMap.set(key, {
        pos: vectorPos,
        type: tile.type,
        color: tiles[tile.type],
    });
}