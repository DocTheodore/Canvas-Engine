import GameScreen from "../game/GameScreen.js";
import Entity from "../core/entity.js";

class Player extends Entity{
    constructor(size = {x: 1, y: 1}, position = {x: 0, y: 0}, color = "#00f") {
        super(size, position, color); 
    }
    
    Movement(input, speed) {
        const direction = {x: 0, y: 0};

        switch (input){
            case 'w':
                direction.y = -1;
                break;
            case 's':
                direction.y = 1;
                break;
            case 'd':
                direction.y = 1;
                break;
            case 'a':
                direction.x = -1;
                break;
        }
        this.ChangeVelocity(direction, speed? speed: this.speed);
    }
}

export default Player;