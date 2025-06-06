import Entity from "./entityOld.js"
import f from "../shared/tupple.js";
import GameScreen from "../game/GameScreen.js";
import getTiles from "../game/tilelist.js";
import { getEntities } from "../game/entitylist.js";

let timer = 0;
const tiles = [];
export const entities = [];
const entitiesDir = [];

export default function Render(dt){
    timer += dt;

    GameScreen.getInstance().clear();

    if(!tiles.length) getTiles(tiles);
    if (!entities.length) entities.push(...getEntities());

    // Update ============================================
    entities.forEach((entity, i) => {
        entity = entity.object;

        
        if(i === 0){
            entity.ChangeVelocity();
            tiles.forEach(tile => {
                entity.CheckColision(tile);
            })
            //console.log(entity.pos);
        }

        entity.Update(dt);
    })

    // Drawn =============================================
    tiles.forEach(tile => tile.Drawn());
    entities.forEach(entity => entity.object.Drawn());

    //console.log(Math.floor(timer));
}