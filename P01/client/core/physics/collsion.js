import Vector from "../../shared/vector";
import AABB from "./shapes/AABB"
import Circle from "./shapes/circle";

function vsAABB(a, b) {
    if(!(a instanceof AABB) || !(b instanceof AABB)) throw new Error("Você precisa de 2 AABBs para este tipo de colisão");

    if(a.max.x < b.min.x || a.min.x > b.max.x) return false
    if(a.max.y < b.min.y || a.min.y > b.max.y) return false

    return true
}

function vsCircle(a, b){
    if(!(a instanceof Circle) || !(b instanceof Circle)) throw new Error("Você precisa de 2 círculos para este tipo de colisão");

    let r = a.rad + b.rad;
    r *= r;
    return r < (a.pos.x + b.pos.x)**2 + (a.pos.y + b.pos.y)**2;
}

/*
    Nova classe entity
    mass = massa da entidade
    inv = 1 / mass
    vel = Vector do vel
    res = ???
*/

function Resolve(A, B) {
    const rv = new Vector(B.vel.sub(A.vel));

    const velInNormal = rv.dot(normal);

    if (velInNormal < 0) return;

    const e = Math.min(A.restitution, B.restitution);

    let j = -(1 + e) * velInNormal;
    j /= 1 / A.mass + 1 / B.mass;

    const impulse = normal.scal(j);
    A.vel.sub(new Vector(A.vel.x - 1 / A.mass * impulse, A.vel.y - 1 / A.mass * impulse));
    B.vel.sub(new Vector(B.vel.x + 1 / B.mass * impulse, B.vel.y + 1 / B.mass * impulse));
}

//////////

export default {
    vsAABB,
    vsCircle,
    Resolve,
}