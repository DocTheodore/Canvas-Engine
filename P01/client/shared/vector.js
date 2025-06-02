export default class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    // Retorna o Vetor em string
    toString(){
        return `(${this.x}x, ${this.y}y)`;
    }

    // Copia este Vetor
    clone(){
        return new Vector(this.x, this.y);
    }

    // Adição
    add(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");

        const x = this.x + other.x;
        const y = this.y + other.y;
        return new Vector(x, y);
    }

    // Subtração
    sub(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");

        const x = this.x - other.x;
        const y = this.y - other.y;
        return new Vector(x, y);
    }

    // Magnitude
    magn(root=false) {
        let hip = (this.x**2) + (this.y**2);
        if(!root) return hip; // por padrão retorna o valor inteiro
        return Math.sqrt(hip);
    }

    // Scalar
    scal(s) {
        const x = this.x * s;
        const y = this.y * s;
        return new Vector(x, y);
    }

    // Produto Dot
    dot(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");

        const x = this.x * other.x;
        const y = this.y * other.y;
        const dot = x + y;
        return dot;
    }

    // Normalização
    norm() {
        const magn = this.magn(true);
        if(magn === 0) return new Vector (0, 0);

        const x = this.x / magn;
        const y = this.y / magn;
        return new Vector(x, y);
    }
}