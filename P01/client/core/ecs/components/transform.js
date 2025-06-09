import Vector from "../../../shared/vector";

export default class Transform {
    constructor(pos=Vector.zero, size=Vector.zero, dir=1) {
        this.pos = pos;
        this.size = size;
        this.dir = dir;
    }

    // get/set
    // Posição X
    get x() {
        return this.pos.x;
    }
    set x(v){
        this.pos.x = v;
    }

    // Posição Y
    get y() {
        return this.pos.y;
    }
    set y(v){
        this.pos.y = v;
    }

    // WIDTH
    get width() {
        return this.size.x;
    }
    set width(v) {
        this.size.x = v;
    }

    // HEIGHT
    get height() {
        return this.size.y;
    }
    set height(v) {
        this.size.y = v;
    }
}