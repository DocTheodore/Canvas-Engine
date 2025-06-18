import Vector from "../../client/shared/vector.js";

class _GlobalTileMap {
    constructor () {
        this.tiles = new Map();
    }

    _key(pos = Vector.zero) {
        return `${pos.x},${pos.y}`;
    }

    setTile(pos=Vector.zero, type=0) {
        const key = this._key(pos);
        if(type === 0) {
            this.tiles.delete(key);
        } else {
            this.tiles.set(key, type);
        }
    }

    getTile(pos=Vector.zero) {
        const key = this._key(pos);
        return this.tiles.get(key) || 0;
    }

    exportAllTiles() {
        const data = [];
        for (const [key, type] of this.tiles.entries()) {
            const [x, y] = key.split(',').map(Number);
            data.push({pos: new Vector(x, y), type});
        }
        console.log(data);
        return data;
    }

}

export const GlobalTileMap = new _GlobalTileMap();