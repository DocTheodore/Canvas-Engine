import Vector from "../../../shared/vector";

export default class Shape {
    constructor(pos=Vector.zero){
        if(new.target === Shape){
            throw new Error("Shape é uma classe abstrata e não pode ser instanciada diretamente");
        }
        
        if(!(pos instanceof Vector)) throw new Error("Argumento precisa ser um Vetor");
        this.pos = pos;
    }
}