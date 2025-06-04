export default class Vector {
    constructor(x, y){
        if (!isFinite(x) || !isFinite(y)) throw new Error("Vetor inválido detectado");
        this.x = x;
        this.y = y;
    }

    // Retorna o Vetor em string
    toString() {
        return `(${this.x}x, ${this.y}y)`;
    }

    // Copia este Vetor
    clone() {
        return new Vector(this.x, this.y);
    }

    // Adição
    add(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");

        const x = this.x + other.x;
        const y = this.y + other.y;
        return new Vector(x, y);
    }
    addSelf(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");

        this.x += other.x;
        this.y += other.y;
    }

    // Subtração
    sub(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");

        const x = this.x - other.x;
        const y = this.y - other.y;
        return new Vector(x, y);
    }
    subSelf(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");

        this.x -= other.x;
        this.y -= other.y;
    }

    // Magnitude
    magnSQ() {
        return (this.x**2) + (this.y**2); // Retorna o valor Quadrado
    }
    magn() {
        return Math.sqrt(this.magnSQ()); // Retorna o valor real
    }
    limit(max) {
        const mag = this.magn();
        if (mag > max) {
            return this.norm().scal(max);
        }
        return this.clone();
    }

    // Scalar
    scal(s) {
        const x = this.x * s;
        const y = this.y * s;
        return new Vector(x, y);
    }
    scalSelf(s) {
        this.x *= s;
        this.y *= s;
    }

    // Produto Dot
    dot(other) {
        if(!(other instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");
        return this.x * other.x + this.y * other.y;
    }

    // Normalização
    norm() {
        const magn = this.magn();
        if(magn === 0) return new Vector (0, 0);

        const x = this.x / magn;
        const y = this.y / magn;
        return new Vector(x, y);
    }
    normSelf() {
        const magn = this.magn();
        if(magn === 0) return;
        this.x /= magn;
        this.y /= magn;
    }

    // Rotação do Vetor em angulos
    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Vector(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }

    // Equals
    equals(other, tolerance = 0.0001) {
        return (
            Math.abs(this.x - other.x) < tolerance &&
            Math.abs(this.y - other.y) < tolerance
        );
    }
}