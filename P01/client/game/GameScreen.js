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
}


