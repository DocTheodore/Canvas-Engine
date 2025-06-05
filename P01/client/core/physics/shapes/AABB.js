import Vector from "../../../shared/vector";
import Shape from "./shape";

export default class AABB extends Shape{
constructor(pos = Vector.zero, size = Vector.zero) {
        super(pos); // Chama o construtor de Shape

        if (!(size instanceof Vector)) throw new Error("Argumento 'size' precisa ser um Vetor");
        this.size = size.clone(); // Armazena como tamanho
    }

    // Posição
    // MIN
    get min() {
        return this.pos;
    }

    // MAX
    get max() {
        return this.pos.add(this.size);
    }

    // Tamanho
    // WIDTH
    get width() {
        return this.max.x - this.min.x;
    }
    set width(value) {
        this.max.x = this.min.x + value;
    }

    // HEIGHT
    get height() {
        return this.max.y - this.min.y;
    }
    set height(value) {
        this.max.y = this.min.y + value;
    }

    // SIZE
    get size() {
        return new Vector(this.width, this.height);
    }
    set size(value) {
        if (!(value instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");
        this.width = value.x;
        this.height = value.y;
    }
    
}