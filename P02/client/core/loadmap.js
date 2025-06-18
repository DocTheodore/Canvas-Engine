import { TILE_PX } from "../shared/sys_var.js";
import Vector from "../shared/vector.js";
import Colors from "../shared/colors.js";
import Camera from "./camera.js";
import Tile from "./tile.js";

const CHUNK_SIZE = 50;
const CHUNK_F = 1 / CHUNK_SIZE;

class _LoadMap {
    constructor() {
        this.tiles = new Map();
    }

    _key(pos=Vector.zero) {
        return `${pos.x},${pos.y}`;
    }

    setTile(pos=Vector.zero, tile=new Tile()) {
        const key = this._key(pos);
        if(tile === null ||  tile.type === 0) {
            this.tiles.delete(key);
        } else {
            this.tiles.set(key, tile);
        }
    }

    getTile(pos=Vector.zero) {
        const key = this._key(pos);
        return this.tiles.get(key) || null;
    }

    render(ctx) {
        const scale = 1 / Camera.zoom;
        const cameraLeft = Camera.x * scale;
        const cameraTop = Camera.y * scale;
        const cameraRight = (Camera.x + Camera.w) * scale;
        const cameraBottom = (Camera.y + Camera.h) * scale;

        for (const [key, tile] of this.tiles.entries()) {
            const [x, y] = key.split(',').map(Number);
            const TileX = x * TILE_PX;
            const TileY = y * TILE_PX;

            if (
                TileX + TILE_PX >= cameraLeft && TileX <= cameraRight &&
                TileY + TILE_PX >= cameraTop && TileY <= cameraBottom                
            ) {
                ctx.fillStyle = tile.getColor();
                ctx.fillRect(TileX, TileY, TILE_PX, TILE_PX);
            }
        }
    }
}

export const LoadMap = new _LoadMap();