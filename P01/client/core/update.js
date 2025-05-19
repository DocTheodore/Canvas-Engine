import Entity from "./entity.js";
import f from "../shared/tupple.js";

let timer = 0;


export default function Update(dt){
    timer += dt;
    //console.log(Math.floor(timer));
}