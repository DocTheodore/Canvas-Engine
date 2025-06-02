import GameScreen from "../game/GameScreen.js";
import getSides from "../shared/size.js";
import { tileSize } from "../shared/size.js";
import f from "../shared/tupple.js";
class Entity {
    constructor(size={x:1, y:1}, position={x: 0, y: 0}, color="#000") {
        this.size = {
            x: size.x * tileSize,
            y: size.y * tileSize
        };
        this.pos = { ...position };
        this.color = color;

        this.vel = {x: 0, y: 0};
        this.dir = {x: 0, y: 0};
        this.speed = 1;

        this.colisions = {
            right :false,
            left :false,
            up :false,
            down :false,            
        }
    }

    get side() {
        return getSides(this.pos, this.size);
    }
    
    Drawn() {
        const ctx = GameScreen.ctx;
        ctx.fillStyle = this.color || "#000";

        ctx.fillRect(
            Math.round(this.pos.x),
            Math.round(this.pos.y),
            Math.round(this.size.x),
            Math.round(this.size.y)
        );
        //console.log(this);
    }

    CheckColision(target) {
        const a = this.side;
        const b = target.side;

        const isColliding = (
            a.right >= b.left &&
            a.left <= b.right &&
            a.down >= b.up &&
            a.up <= b.down
        );

        const colisions = {
            right: false,
            left: false,
            up: false,
            down: false
        };

        if (isColliding) {
            const dx = (a.right + a.left) / 2 - (b.right + b.left) / 2;
            const dy = (a.down + a.up) / 2 - (b.down + b.up) / 2;

            const overlapX = (a.right - a.left) / 2 + (b.right - b.left) / 2 - Math.abs(dx);
            const overlapY = (a.down - a.up) / 2 + (b.down - b.up) / 2 - Math.abs(dy);

            if (overlapX < overlapY) {
                if (dx > 0) {
                    this.pos.x = this.pos.x + overlapX;
                    colisions.left = true;
                } else {
                    this.pos.x = this.pos.x - overlapX;
                    colisions.right = true;
                }
                //this.vel.x = 0;
            } else {
                if (dy > 0) {
                    this.pos.y += overlapY;
                    colisions.up = true;
                } else {
                    this.pos.y -= overlapY;
                    colisions.down = true;
                }
                //this.vel.y = 0;
            }
        }

        this.colisions = colisions;
    }

    ChangeVelocity(direction=this.dir, speed=this.speed) {
        //console.log('direction:', direction, speed)
        this.vel.x = direction.x * speed;
        this.vel.y = direction.y * speed;
    }

    Update(dt) {
        if(isNaN(dt)) return;
        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;
    }
}

export default Entity;