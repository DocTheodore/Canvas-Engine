import Entity from "../core/entity.js";
import f from "../shared/tupple.js";
import GameScreen from "./GameScreen.js";

export function getEntities(){ return [
    {
        name: 'Player',
        id: 1,
        object: new Entity(f(2, 3), GameScreen.center(2, 3), "#0FE"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    }
]
}