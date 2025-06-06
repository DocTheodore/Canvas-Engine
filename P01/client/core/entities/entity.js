export default class Entity {
    static _id = 0; // ID unico, compartilhado entre todas as entidades do sistema

    constructor(name = '') {
        Entity._id++;
        this.id = Entity._id;
        this.sys_name = String(name);
        this.components = new Map();
    }

    toString() {
        return `Entity(id: ${this.id}, sys_name: ${this.sys_name})`;
    }

    // Adicionar um novo componente dentro da entidade
    addComponent(component) {
        if (!(component && component.constructor)) {
            throw new Error('Componente inválido');
        }
        const componentName = component.constructor.name;
        this.components.set(componentName, component);
    }

    // Pega um componente especifico pelo nome
    getComponent(componentName) {
        const component = this.components.get(componentName);
        if (!component) {
            console.log(`Componente ${componentName} não encontrado na entidade.`);
            return null;
        }
        return component;
    }

    // Verifica se um componente especifico existe
    hasComponent(componentName) {
        return this.components.has(componentName);
    }

    // Tira um componente desta entidade
    removeComponent(componentName) {
        if (this.components.has(componentName)) {
            this.components.delete(componentName);
            return true;  // Retorna `true` se a remoção foi bem-sucedida
        }
        return false;  // Retorna `false` se o componente não foi encontrado
    }

    // Remover todos os componentes
    removeAllComponents(){
        this.components.clear();
    }

}

/* export default class _Entity {

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
} */