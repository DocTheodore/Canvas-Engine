class Entity {
    constructor(context, size={w:1, h:1}, color="#000", position={x: 0, y: 0}) {
        this.ctx = context;
        this.size = size;
        this.pos = position;
        this.color = color;
        this.vel = {vx: 0, vy: 0};
    }

    Drawn() {
        this.ctx.fillStyle = this.color || "#000";
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
    }
}
