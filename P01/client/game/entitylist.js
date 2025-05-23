import Entity from "../core/entity.js";
import Player from "./player.js";
import f from "../shared/tupple.js";
import GameScreen from "./GameScreen.js";

export function getEntities(){ return [
    {
        name: 'P0',
        id: 0,
        object: new Player(f(2, 3), GameScreen.center(-16, 0), "#000"/* "#0FE" */),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P1',
        id: 1,
        object: new Player(f(2, 3), GameScreen.center(-8, -8), "#F00"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P2',
        id: 2,
        object: new Player(f(2, 3), GameScreen.center(-8, 0), "#F50"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P3',
        id: 3,
        object: new Player(f(2, 3), GameScreen.center(-8, 8), "#FF0"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P4',
        id: 4,
        object: new Player(f(2, 3), GameScreen.center(0, -8), "#0F0"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P5',
        id: 5,
        object: new Player(f(2, 3), GameScreen.center(0, 0), "#0FE"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P6',
        id: 6,
        object: new Player(f(2, 3), GameScreen.center(0, 8), "#00F"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P7',
        id: 7,
        object: new Player(f(2, 3), GameScreen.center(8, -8), "#A0F"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P8',
        id: 8,
        object: new Player(f(2, 3), GameScreen.center(8, 0), "#F0D"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    },
    {
        name: 'P9',
        id: 9,
        object: new Player(f(2, 3), GameScreen.center(8, 8), "#F05"),
        Drawn: function() {
            return this.object.Drawn();
        },
        Update: function(dt) {
            return this.object.Update(dt);
        }
    }

]
}