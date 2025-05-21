import GameScreen from "./GameScreen.js";
import Render from "../core/renderer.js";
import { entities } from "../core/renderer.js";
import InputHandler from "../core/inputHandler.js";

InputHandler.init();

//Controle das entidades
document.addEventListener("keydown", (event) => {
    const key = event.key;
    
    if (!isNaN(key)) { // Se a tecla for um número (0 a 9)
        const index = parseInt(key);
        const entityWrapper = entities[index];
        
        if (entityWrapper && entityWrapper.object) {
            const entity = entityWrapper.object;
            // Define uma nova posição aleatória dentro da tela
            entity.pos.x = Math.random() * (GameScreen.width - entity.size.x * 16);
            entity.pos.y = Math.random() * (GameScreen.height - entity.size.y * 16);
        }
    }
});

const player = 0;


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