import { TILE_PX } from "../shared/sys_var.js";
import Vector from "../shared/vector.js";
import Colors from "../shared/colors.js";

const CHUNK_SIZE = 50;
const CHUNK_F = 1 / CHUNK_SIZE;

class _TileMap {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.tiles = new Array(cols * rows).fill(0);
        this.loadedChunks = {};
    }

    getIndex(pos=new Vector()) {
        return pos.y * this.cols + pos.x;
    }

    setTile(pos=new Vector(), type=0) {
        const index = this.getIndex(pos);
        if(index >= 0 && index < this.tiles.length) {
            this.tiles[index] = type;
        }
    }

    getTile(pos) {
        const index = this.getIndex(pos);
        return this.tiles[index];
    }

    getChunkCoords(loader) { // Posição do loader de chunk
        return new Vector(
            Math.floor(loader.x * CHUNK_F),
            Math.floor(loader.x * CHUNK_F),            
        );
    }

    loadChunks(loader) { // Escolhe quais chunk renderizar ao redor do loader
        const chunkCoords = this.getChunkCoords(loader);

        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                const chunkKey = `${chunkCoords.x + x},${chunkCoords.y + y}`;

                if(!this.loadedChunks[chunkKey]) {
                    this.loadedChunks[chunkKey] = this.loadChunk(chunkCoords.x + x, chunkCoords.y + y);
                }
            }
        }
    }

    loadChunk(chunkX, chunkY) {
        const chunk = new Array(CHUNK_SIZE * CHUNK_SIZE).fill(0);

        ////////

        return chunk;
    }

    render(ctx, loader) {
        this.loadChunks(loader); // Carrega os chunks perto do loader

        for (let y=0; y < this.rows; y++) {
            for (let x=0; x < this.cols; x++) {
                const tile = this.getTile(new Vector(x, y));
                if (tile === 0) continue;

                const color = Colors.black || "fff";
                ctx.fillStyle = color;
                ctx.fillRect(
                    x * TILE_PX,
                    y * TILE_PX,
                    TILE_PX,
                    TILE_PX
                );
            }
        }
    }
}

export const TileMap = new _TileMap(100, 100);