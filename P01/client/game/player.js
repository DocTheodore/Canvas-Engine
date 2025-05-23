import GameScreen from "../game/GameScreen.js";
import Entity from "../core/entity.js";

class Player extends Entity{
    constructor(size = {x: 1, y: 1}, position = {x: 0, y: 0}, color = "#00f") {
        super(size, position, color); 
    }
    
    Movement(input, speed=1) {
        console.log(input);
        const direction = {x: 0, y: 0};

        if(input.includes("w") || !(input.includes("s"))) direction.y = -1;
        if(input.includes("a") || !(input.includes("d"))) direction.x = -1;
        if(input.includes("s") || !(input.includes("w"))) direction.y = 1;
        if(input.includes("d") || !(input.includes("a"))) direction.x = 1;

        this.ChangeVelocity(direction, speed);
    }
}

export default Player;