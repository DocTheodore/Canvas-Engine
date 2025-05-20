import Entity from "./entity.js";
import f from "../shared/tupple.js";
import { getEntities } from "../game/entitylist.js";

let timer = 0;

const entities = [];

export default function Update(dt){
    timer += dt;
    if (!entities.length) entities.push(...getEntities());

    entities.forEach(entity => {
        entity.Update(dt);
        entity.object.ChangeVelocity(f(1, 1), 10);
    })


    //console.log(Math.floor(timer));
}