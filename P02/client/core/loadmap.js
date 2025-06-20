import { TILE_PX } from "../shared/sys_var.js";
import Vector from "../shared/vector.js";
import Colors from "../shared/colors.js";
import Camera from "./camera.js";
import Tile from "./tile.js";

const CHUNK_SIZE = 50;
const CHUNK_F = 1 / CHUNK_SIZE;

class Chunk {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tiles = new map();
    }

    get pos() {
        return new Vector(this.x, this.y);
    }
    set pos(v=Vector.zero) {
        this.x = v.x;
        this.y = v.y;
    }

    _key (pos=Vector.zero) {
        return `${pos.x},${pos.y}`;
    }

    setTile(localPos=Vector.zero, tile) {
        const key = this._key(localPos);
        this.tiles.set(key, tile);
    }

    getTile(localPos) {
        const key = this_key(localPos);
        return this.tiles.get(key) || null;
    }
}

class _LoadMap {
    constructor() {
        this.chunks = new Map();
    }

    _chunkKey(worldPos) {
        const wx = Math.floor(worldPos.x * CHUNK_F);
        const wy = Math.floor(worldPos.y * CHUNK_F);
        return `${wx,wy}`;
    }

    setTile(worldPos, tile) {
        const key = this._chunkKey(worldPos);
        let chunk = this.chunks.get(key);

        if(!chunk) {
            chunk = new Chunk(Math.floor(worldPos.x * CHUNK_F), Math.floor(worldPos.x * CHUNK_F));
            this.chunks.set(key, chunk);
        }

        const localPos = new Vector(worldPos.x % CHUNK_SIZE, worldPos.y % CHUNK_SIZE);
        chunk.setTile(localPos, tile);
    }

    getTile(worldPos) {
        const key = this._chunkKey(worldPos);
        this.chunks.get(key);

        if(!chunk) return null;
    }

    /* _key(pos=Vector.zero) {
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
    } */
}

export const LoadMap = new _LoadMap();