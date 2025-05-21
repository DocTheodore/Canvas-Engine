export default class GameScreen {
    static instance = null;

    constructor() {
        if (GameScreen.instance) {
            throw new Error("Use GameScreen.getInstance() para criar a instância.");
        }
        GameScreen.canvas = document.getElementById("GameScreen");
        GameScreen.width = GameScreen.canvas.width;
        GameScreen.height = GameScreen.canvas.height;
        GameScreen.ctx = GameScreen.canvas.getContext("2d");
    }

    static getInstance() {
        if (!GameScreen.instance) {    GameScreen.instance = new GameScreen();    }
        return GameScreen.instance;
    }

    clear() {
        GameScreen.ctx.clearRect(0, 0, GameScreen.width, GameScreen.height);
    }

    static center(x=0, y=0) {
        const tileSize = 16;
        return {x:(Math.floor((GameScreen.width/2)+(x*tileSize/2))), y:(Math.floor((GameScreen.height/2)-(y*tileSize/2)))};
    }
}


