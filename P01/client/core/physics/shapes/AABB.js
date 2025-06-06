import Vector from "../../../shared/vector.js";
import Shape from "./shape.js";

export default class AABB extends Shape {
    constructor(pos = Vector.zero, size = Vector.zero) {
        super(pos);

        if (!(size instanceof Vector)) {
            throw new TypeError("AABB: 'size' deve ser um Vector.");
        }

        this.size = size.clone(); // armazena internamente
    }

    // Posição mínima (canto superior esquerdo)
    get min() {
        return this.pos.clone();
    }

    // Posição máxima (canto inferior direito)
    get max() {
        return this.pos.add(this.size);
    }

    // Largura
    get width() {
        return this.size.x;
    }
    set width(value) {
        if (typeof value !== "number" || value < 0) throw new Error("Largura inválida.");
        this.size.x = value;
    }

    // Altura
    get height() {
        return this.size.y;
    }
    set height(value) {
        if (typeof value !== "number" || value < 0) throw new Error("Altura inválida.");
        this.size.y = value;
    }

}