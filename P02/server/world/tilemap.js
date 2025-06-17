import Vector from "../../client/shared/vector.js";

const TILE_ROWS = 100;
const TILE_COLS = 100;

class _GlobalTileMap {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.tiles = new Array(cols * rows).fill(0);
    }

    getIndex(pos=Vector.zero) {
        return pos.y * this.cols + pos.x;
    }
    
    setTile(pos=Vector.zero, type=0) {
        const index = this.getIndex(pos);
        if(index >= 0 && index < this.tiles.length) {
            this.tiles[index] = type;
        }
    }

    getTile(pos=Vector.zero) {
        const index = this.getIndex(pos);
        return this.tiles[index];
    }

    exportAllTiles() {
        const data = [];
        for(let y=0; y < this.rows; y++){
            for(let x=0; x < this.cols; x++) {
                const index = y * this.cols + x;
                const type = this.getTile(new Vector(x, y));
                if(type !== 0){
                    console.log("tile que foi mandado: ",{pos: {x, y}, type})
                    data.push({pos: new Vector(x, y), type});
                }
            }
        }
        
        //console.log(data);
        return data;
    }
}

export const GlobalTileMap = new _GlobalTileMap(TILE_ROWS, TILE_COLS);