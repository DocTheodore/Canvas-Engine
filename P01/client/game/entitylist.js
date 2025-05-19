import Entity from "../core/entity.js";
import f from "../shared/tupple.js";

export const entities = [
    {
        name: 'Player',
        id: 1,
        object: new Entity(f(2, 3), f(0, 0), "#0FE")
    }
]