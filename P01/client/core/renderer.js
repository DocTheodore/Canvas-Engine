import Entity from "./entity.js"
import f from "../shared/tupple.js";
import GameScreen from "../game/GameScreen.js";
import getTiles from "../game/tilelist.js";
import { getEntities } from "../game/entitylist.js";

let timer = 0;
const tiles = [];
export const entities = [];
const entitiesDir = [];

function coinflip() {
    return Math.floor(Math.random()*2)===0? 1: -1;
}

export default function Render(dt){
    timer += dt;
    if(!tiles.length) getTiles(tiles);
    if (!entities.length) entities.push(...getEntities());

    tiles.forEach(tile => {
        tile.Drawn();
    })
    entities.forEach((entity, i) => {
        entity = entity.object;
        if(!entitiesDir[i]) entitiesDir[i] = f(coinflip(), coinflip());
        //console.log(entity, entitiesDir[i]);

        if(entity.pos.x > GameScreen.width-entity.size.x*16 || entity.pos.x < 0) entitiesDir[i].x *= -1;
        if(entity.pos.y > GameScreen.height-entity.size.y*16 || entity.pos.y < 0) entitiesDir[i].y *= -1;
        
        entity.ChangeVelocity(entitiesDir[i], 64);

        entity.Update(dt);
        entity.Drawn();
    })

    console.log(Math.floor(timer));
}