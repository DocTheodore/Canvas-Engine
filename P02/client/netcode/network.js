export const socket = io();
export const netdata = {
    tilesToRender: [],
}

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