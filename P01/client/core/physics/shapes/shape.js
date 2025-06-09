import Vector from "../../../shared/vector.js";

export default class Shape {
    constructor(pos = Vector.zero) {
        if(new.target === Shape){
            throw new Error("Shape é uma classe abstrata e não pode ser instanciada diretamente");
        }

        if (!(pos instanceof Vector)) {
            throw new TypeError("'position' deve ser um Vector.");
        }

        this.pos = pos.clone(); // armazena internamente
    }

}