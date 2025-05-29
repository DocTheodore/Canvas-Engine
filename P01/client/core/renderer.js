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

    // Update ============================================
    entities.forEach((entity, i) => {
        entity = entity.object;
        entitiesDir[i] = entity.vel;
        if(!entitiesDir[i]) entitiesDir[i] = f(0, 0);
        //console.log(entity, entitiesDir[i]);
        
        if(i === 0){
            tiles.forEach(tile => {
                entity.CheckColision(tile);
            })
        }
        
        entity.ChangeVelocity(entitiesDir[i], 8);
        entity.Update(dt);
    })

    // Drawn =============================================
    tiles.forEach(tile => tile.Drawn());
    entities.forEach(entity => entity.object.Drawn());

    //console.log(Math.floor(timer));
}