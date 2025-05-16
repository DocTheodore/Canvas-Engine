class Entity {
    constructor(context, size={x:1, y:1}, color="#000", position={x: 0, y: 0}) {
        this.ctx = context;
        this.size = size;
        this.pos = position;
        this.color = color;
        this.vel = {x: 0, y: 0};
        this.speed = 1;

        console.log(`X: ${this.pos.x}, Y:${this.pos.y}`);
    }
    
    Drawn() {
        const tileSize = 32;
        this.ctx.fillStyle = this.color || "#000";
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.x * tileSize, this.size.y * tileSize);
    }

    ChangeVelocity(direction={x: 0, y:0}, speed=this.speed) {
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