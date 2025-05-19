import Entity from "./entity.js"
import f from "../shared/tupple.js";
import GameScreen from "../game/GameScreen.js";
import getTiles from "../game/tilelist.js";

const tiles = [];
const entities = [];

export default function Render(){
    if(!tiles.length) getTiles(tiles);

    tiles.forEach(tile => {
        tile.Drawn();
    })
}