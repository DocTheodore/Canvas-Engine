import Vector from "../../../shared/vector";

export default class AABB {
    constructor(min=Vector(0, 0), max=Vector(0, 0)){
        this.min = min;
        this.max = max;
    }
    
}