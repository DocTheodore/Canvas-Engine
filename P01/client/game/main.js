import GameScreen from "./GameScreen.js";
import Render from "../core/renderer.js";

export default function Main(){
    console.log('P01 Iniciado');
    // Variaveis Iniciais
    const game = GameScreen.getInstance();

    // Inicialização de componentes
    function gameStart() {

        requestAnimationFrame(gameLoop);
    }

    // Loop Principal do jogo
    let lastTime = 0;
    function gameLoop(currentTime) {
        GameScreen.getInstance().clear();
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        Render(deltaTime);
        
        requestAnimationFrame(gameLoop);
    }

    //Inicio do jogo
    gameStart();
}