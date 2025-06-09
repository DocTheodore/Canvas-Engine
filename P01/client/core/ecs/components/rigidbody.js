import Vector from "../../../shared/vector";

export default class RigidBody {
    constructor(vel = Vector.zero, mass = 0) {
        this.vel = vel;
        this._mass = mass;
    }

    // get/set
    // MASS
    get mass() {
        return this._mass;
    }
    get invMass() {
        return 1 / ( this._mass || 1 );
    }
    set mass(v) {
        this._mass = (v > 0? v : 0);
    }

}