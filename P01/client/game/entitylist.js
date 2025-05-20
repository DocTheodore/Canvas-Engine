import Entity from "../core/entity.js";
import f from "../shared/tupple.js";

export const getEntities = () => [
    {
        name: 'Player',
        id: 1,
        object: new Entity(f(2, 3), f(0, 0), "#0FE"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    }
]