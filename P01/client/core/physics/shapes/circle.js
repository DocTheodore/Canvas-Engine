import Vector from "../../../shared/vector.js";
import Shape from "./shape.js";

export default class Circle extends Shape {
    constructor(pos = Vector.zero, rad = 0) {
        super(pos);

        if (typeof rad !== "number" || rad < 0 || !isFinite(rad)) {
            throw new TypeError("Circle: 'rad' deve ser um número não-negativo e finito.");
        }

        this.rad = rad;
    }

    get diameter() {
        return this.rad * 2;
    }

    set diameter(value) {
        if (typeof value !== "number" || value < 0) throw new Error("Diâmetro inválido.");
        this.rad = value / 2;
    }

    get area() {
        return Math.PI * this.rad ** 2;
    }
}