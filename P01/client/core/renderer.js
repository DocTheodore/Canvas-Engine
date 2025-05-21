import Entity from "./entity.js"
import f from "../shared/tupple.js";
import GameScreen from "../game/GameScreen.js";
import getTiles from "../game/tilelist.js";
import { getEntities } from "../game/entitylist.js";

let timer = 0;
const tiles = [];
const entities = [];

export default function Render(dt){
    timer += dt;
    if(!tiles.length) getTiles(tiles);
    if (!entities.length) entities.push(...getEntities());

    tiles.forEach(tile => {
        tile.Drawn();
    })
    entities.forEach(entity => {
        if(entity.object.vel.x === 0) entity.object.ChangeVelocity(f(1, 0), 64);
        entity.Update(dt);
        entity.Drawn();
    })

    console.log(Math.floor(timer));
}