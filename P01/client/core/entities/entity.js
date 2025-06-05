import Vector from "../../shared/vector";
import AABB from "../physics/shapes/AABB";

export default class Entity {

    constructor() {
        if(new.target === Entity){
            throw new Error("Entity é uma classe abstrata e não pode ser instanciada diretamente");
        }

        // Identificação
        this.id = 0;
        this.active = false;

        // Posição no mapa
        this.pos = new Vector(0, 0);
        this.vel = new Vector(0, 0);

        // Direção
        this.dir = 1;

        // Tamanho
        this.width = 0;
        this.height = 0;
        this.shape = '';

        // Peso
        this.mass = 1;
        this.inv = 1 / (this.mass ?? 1);
    }

    // Posição pra renderização
    get visualPosition() {
        return this.pos;
    }

    // Metodos de direção e distancia
    // ANGULO
    angleTo(dest) {
        return Math.atan2(dest.y - this.center.y, dest.x - this.center.x);
    }
    angleFrom(src) {
        return Math.atan2(this.center.y - src.y, this.center.x - src.x);
    }

    // DISTANCIA
    distance(other){
        return this.center.sub(other).magn();
    }
    distanceSQ(other){
        return this.center.sub(other).magnSQ();
    }

    // DIREÇÃO
    directionTo(dest){
        return dest.sub(this.center).norm();
    }
    directionFrom(src){
        return this.center.sub(src).norm();
    }

    // DETECÇÃO
    withinRange(target, maxRange){
        return this.distanceSQ(target) <= maxRange**2;
    }


    // Propriedades calculadas (get/set)
    // CENTER
    get center(){
        return new Vector(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    set center(value) {
        this.pos = new Vector(value.x - this.width / 2, value.y - this.height / 2);
    }

    // LEFT
    get left(){
        return new Vector(this.pos.x, this.pos.y + this.height / 2);
    }
    set left(value){
        this.pos = new Vector(value.x, value.y - this.height / 2);
    }

    // RIGHT
    get right(){
        return new Vector(this.pos.x + this.width, this.pos.y + this.height / 2);
    }
    set right(value){
        this.pos = new Vector(value.x - this.width, value.y - this.height / 2);
    }

    // TOP
    get top(){
        return new Vector(this.pos.x + this.width / 2, this.pos.y);
    }
    set top(value){
        this.pos = new Vector(value.x - this.width / 2, value.y);
    }

    // TOP-LEFT
    get topLeft(){
        return this.pos.clone();
    }
    set topLeft(value){
        this.pos = value.clone();
    }

    // TOP-RIGHT
    get topRight(){
        return new Vector(this.pos.x + this.width, this.pos.y);
    }
    set topRight(value){
        this.pos = new Vector(value.x - this.width, value.y);
    }

    // BOTTOM
    get bottom(){
        return new Vector(this.pos.x + this.width / 2, this.pos.y + this.height);
    }
    set bottom(value){
        this.pos = new Vector(value.x - this.width / 2, value.y - this.height);
    }

    // BOTTOM-LEFT
    get bottomLeft(){
        return new Vector(this.pos.x, this.pos.y + this.height);
    }
    set bottomLeft(value){
        this.pos = new Vector(value.x, value.y - this.height);
    }

    // BOTTOM-RIGHT
    get bottomRight(){
        return new Vector(this.pos.x + this.width, this.pos.y + this.height);
    }
    set bottomRight(value){
        this.pos = new Vector(value.x - this.width, value.y - this.height);
    }

    // SIZE
    get size(){
        return new Vector(this.width, this.height);
    }
    set size(value){
        this.width = value.x;
        this.height = value.y;
    }

    // HITBOX
    get hitbox(){
        if(this.shape === 'Rect') 
            return new AABB(this.pos.clone(), this.pos.add(this.size));
        else if(this.shape === 'Circle') 
            return new Circle(this.pos.clone(), Math.max(this.width / 2, this.height / 2));
        else return
    }
    set hitbox(value){
        if(value instanceof AABB){
            this.pos = value.min.clone();
            this.size = value.size;
        }


        this.pos = new Vector(value.min.x, value.min.y);
        this.width = value.max.x - value.min.x;
        this.height = value.max.y - value.min.y;
    }

    // MASS
    get mass(){
        return this.mass;
    }
    set mass(value){
        this.mass = value;
        this.inv = 1 / (this.mass ?? 1);
    }
}