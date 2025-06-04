import Vector from "../../../shared/vector";

export default class Circle {
    constructor(pos=new Vector(0, 0), rad=0) {
        this.pos = pos;
        this.rad = rad;
    }
}