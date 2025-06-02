import GameScreen from "../game/GameScreen.js";
import Entity from "../core/entityOld.js";
import { tileSize } from "../shared/size.js";

class Player extends Entity{
    constructor(size = {x: 1, y: 1}, position = {x: 0, y: 0}, color = "#00f") {
        super(size, position, color); 
    }
    
    Movement(input, speed=1) {
        const direction = {x: 0, y: 0};

        if(input.includes("w") && !(input.includes("s")) && !this.colisions.up) direction.y = -1;
        if(input.includes("a") && !(input.includes("d")) && !this.colisions.left) direction.x = -1;
        if(input.includes("s") && !(input.includes("w")) && !this.colisions.down) direction.y = 1;
        if(input.includes("d") && !(input.includes("a")) && !this.colisions.right) direction.x = 1;

        //if(direction.x !== 0 || direction.y !== 0) console.log(input, speed, direction);
        this.dir = direction;
        this.speed = speed * tileSize;
    }
}

export default Player;