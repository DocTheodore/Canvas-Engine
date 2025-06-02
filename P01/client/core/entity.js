export default class Entity {

    /*
    Nova classe entity
    mass = massa da entidade
    inv = 1 / mass
    vel = Vector do vel
    res = ???
*/

    constructor() {
        if(new.target === Entity){
            throw new Error("Entity é uma classe abstrata e não pode ser instanciada diretamente");
        }

        // Identificação
        this.id = 0;

        // Posição no mapa
        this.pos = new Vector(0, 0);
        this.size = new Vector(0, 0);
        this.vel = new Vector(0, 0);
    }

    // Posição pra renderização
    VisualPosition() {
        return this.pos;
    }
}