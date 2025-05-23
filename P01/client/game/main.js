import GameScreen from "./GameScreen.js";
import Render from "../core/renderer.js";
import { entities } from "../core/renderer.js";
import InputHandler from "../core/inputHandler.js";

const playerId = 0
let player;

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


export default function Main(){
    console.log('P01 Iniciado');
    // Variaveis Iniciais
    const game = GameScreen.getInstance();

    // Inicialização de componentes
    function gameStart() {
        InputHandler.init();
        requestAnimationFrame(gameLoop);

        console.log(player);
    }

    // Loop Principal do jogo
    let lastTime = 0;
    function gameLoop(currentTime) {
        GameScreen.getInstance().clear();
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        if (player && player.Movement) {
            player.Movement(InputHandler.getPressedKeys());
        }
        Render(deltaTime);
        
        if(!player) player = entities[playerId];
        console.log(player);
        requestAnimationFrame(gameLoop);
    }

    //Inicio do jogo
    gameStart();
}