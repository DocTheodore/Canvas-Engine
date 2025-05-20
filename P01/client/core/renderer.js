import Entity from "./entity.js"
import f from "../shared/tupple.js";
import GameScreen from "../game/GameScreen.js";
import getTiles from "../game/tilelist.js";
import { getEntities } from "../game/entitylist.js";

const tiles = [];
const entities = [];

export default function Render(){
    if(!tiles.length) getTiles(tiles);
    if (!entities.length) entities.push(...getEntities());

    tiles.forEach(tile => {
        tile.Drawn();
    })
    entities.forEach(entity => {
        entity.Drawn();
    })
}