import Entity from "../core/entity.js"
import f from "../shared/tupple.js";
import GameScreen from "../game/GameScreen.js";

export default function getTiles(tiles){
    if(tiles.length === 0) {
        for(let i=0; i < GameScreen.width; i = i + 16){
            try{
                tiles.push(new Entity(f(1, 1), f(i, GameScreen.height-16), (i/16)%2?"#0F4":"#0D2"));
            } catch(err){
                console.log("Erro: ", err);
            }
        }
    }
    return tiles;
}