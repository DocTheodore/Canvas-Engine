import Vector from "../../shared/vector";
import AABB from "./shapes/AABB"
import Circle from "./shapes/circle";

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function vsAABB(a, b) {
    if(!(a instanceof AABB) || !(b instanceof AABB)) throw new Error("Argumentos inválidos");

    if(a.max.x < b.min.x || a.min.x > b.max.x) return false
    if(a.max.y < b.min.y || a.min.y > b.max.y) return false

    return true
}

function vsCircle(a, b){
    if(!(a instanceof Circle) || !(b instanceof Circle)) throw new Error("Argumentos inválidos");

    const dx = a.pos.x - b.pos.x;
    const dy = a.pos.y - b.pos.y;
    const r = a.rad + b.rad;
    return dx * dx + dy * dy <= r * r;
}

function vsCircleAABB(circle, box){
    if(!(circle instanceof Circle) || !(box instanceof AABB)) throw new Error("Argumentos inválidos");

    const closestX = clamp(circle.pos.x, box.min.x, box.max.x);
    const closestY = clamp(circle.pos.y, box.min.y, box.max.y);

    const dx = circle.pos.x - closestX;
    const dy = circle.pos.y - closestY;

    return dx**2 + dy**2 <= circle.rad**2;
}

function checkCollision(shapeA, shapeB) {
    if (shapeA instanceof Circle && shapeB instanceof Circle) return vsCircle(shapeA, shapeB);
    if (shapeA instanceof AABB && shapeB instanceof AABB) return vsAABB(shapeA, shapeB);
    if (shapeA instanceof Circle && shapeB instanceof AABB) return vsCircleAABB(shapeA, shapeB);
    if (shapeA instanceof AABB && shapeB instanceof Circle) return vsCircleAABB(shapeB, shapeA); // inversão
}

function Resolve(A, B, normal) {
    const rv = B.vel.sub(A.vel);
    const velAlongNormal = rv.dot(normal);

    if (velAlongNormal > 0) return;

    const e = Math.min(A.restitution, B.restitution);

    let j = -(1 + e) * velAlongNormal;
    j /= A.inv + B.inv;

    const impulse = normal.scal(j);

    A.vel = A.vel.sub(impulse.scal(A.inv));
    B.vel = B.vel.add(impulse.scal(B.inv));
}

//////////

export default {
    vsAABB,
    vsCircle,
    checkCollision,
    Resolve,
}