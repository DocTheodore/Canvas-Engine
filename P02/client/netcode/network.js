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

// Funções de evento
socket.on('playerlog', (players) => {
    console.table(players);
});

socket.on('renderTile', (tile) => {
    console.log("[Client] informação de tile recebida pelo servidor ");
    const key = `${tile.pos.x},${tile.pos.y}`;
    const vectorPos = new Vector(tile.pos.x, tile.pos.y).scal(TILE_PX);

    netdata.tileMap.set(key, {
        pos: vectorPos,
        type: tile.type,
        color: tiles[tile.type],
    });
    
    console.log(netdata);
})

socket.on('mapState', (tileData) => {
    console.log("[Client] Estado atual do Mapa recebido pelo servidor ");

    tileData.forEach(tile => {
        const key = `${tile.pos.x},${tile.pos.y}`;
        const vectorPos = new Vector(tile.pos.x, tile.pos.y).scal(TILE_PX);

        netdata.tileMap.set(key, {
            pos: vectorPos,
            type: tile.type,
            color: tiles[tile.type],
        });
    });

    console.log(netdata.tileMap);
})