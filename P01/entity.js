class Entity {
    constructor(width, height, x, y, ctx, color = '#fff', behavior = []) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
        this.behavior = behavior;
    }

    Drawn() {
        this.ctx.fillStyle = this.color || "#fff";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
