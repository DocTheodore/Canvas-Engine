import Colors from "../client/shared/colors.js";
import { TILE_PX } from "../client/shared/sys_var.js";
import Vector from "../client/shared/vector.js";
import { GlobalTileMap } from "./world/tilemap.js";

export default function SetupEvents(socket, io, players) {
    // Atualizar o estado do mapa atual
    socket.on('spawnTile', (data) => {
        //console.log(`[Servidor] Tile clicado pelo Player Id: ${players[socket.id].playerId}`);
        const { pos, type } = data;
        const vectorPos = new Vector(pos.x, pos.y);
        GlobalTileMap.setTile(vectorPos, type);

        io.emit('renderTile', {
            pos: pos,
            color: Colors.green,
        });
    });

}
