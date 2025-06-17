export const socket = io();
export const netdata = {
    tilesToRender: [],
}

export const tileMap = new Map();

// Lidar com a conexão
socket.on('connect', () => {
    console.log('[Cliente] Servidor encontrado');
});
socket.on('connectionSuccess', (id) => {
    console.log('[Cliente] Entrando com ID: ', id);
});
socket.on('serverFull', () => {
    console.log('[Cliente] Conexão recusada, servidor lotado');
});

// Funções de evento
socket.on('playerlog', (players) => {
    console.table(players);
});

socket.on('renderTile', (info) => {
    console.log("[Client] Informação de tile recebida pelo servidor ");
    netdata.tilesToRender.push({
        pos: info.pos,
        color: info.color,
    });
    console.log(netdata);
})

socket.on('mapState', (tiles) => {
    console.log("[Client] Estado atual do Mapa recebido pelo servidor ");

    tiles.forEach(tile => {
        const key = `${tile.pos.x},${tile.pos.y}`;
        tileMap.set(key, {
            pos: tile.pos,
            color: '#00ff00',
        });
    });

    console.log(tileMap);

})