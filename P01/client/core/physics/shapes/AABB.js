import Vector from "../../../shared/vector";

export default class AABB {
    constructor(min=new Vector(0, 0), max=new Vector(0, 0)){
        this.min = min;
        this.max = max;
    }
    
}