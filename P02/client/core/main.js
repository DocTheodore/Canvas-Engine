import { gameScreen } from "../config/game_screen.js";
import inputHandler from "./inputhandler.js";
import keymap from "../config/keymap.js";
import { Debbug } from "../game.js";
import { socket, netdata } from "../netcode/network.js";
import { TILE_PX } from "../shared/sys_var.js";
import Colors from "../shared/colors.js";

const ctx = gameScreen.canvas.getContext("2d");

export default function Main() {
    console.log("Iniciando [SideStory]");
    Setup();

    // Variaveis
    let lastTime = performance.now();
    let fps = { show : 0, count: 0 };

    Start();
    // Loop Principal
    function gameLoop(now){     
        const deltaTime = (now - lastTime) / 1000;
        fps.count = 1 / deltaTime;
        lastTime = now;

        gameScreen.Sizing(ctx);

        Update(deltaTime);
        lateUpdate(deltaTime);
        Render();

        requestAnimationFrame(gameLoop);
    }

    // Funções da engine
    function Setup() {
        setInterval(function() {
            fps.show = Math.round(fps.count);
        }, 1000);
    }

    function Start() {
        console.log("SIZE: ", gameScreen.size);
        console.log("TILES: ", gameScreen.tiles);
        console.log("CENTER: ", gameScreen.center);
    }

    function Update(dt) {
        if(inputHandler.wasTapped(keymap.jump)){ // Teste de Tecla
            console.log("Pulo pressionado!");
        }

        if(inputHandler.wasMouseClicked()) { // Teste de Mouse
            const pos = inputHandler.getFixedMousePos();
            console.log("Mouse: ", pos);

            socket.emit('spawnTile', pos);
        }
    }

    function lateUpdate(dt) {
        Debbug.Log("fps", fps.show);
        inputHandler.lateUpdate(); // Reset do Input
    }

    function Render(){
        clear();

        for (const tile of netdata.tilesToRender) {
            ctx.fillStyle = tile.color;
            ctx.fillRect(tile.pos.x, tile.pos.y, TILE_PX, TILE_PX);
        }
    }

    requestAnimationFrame(gameLoop); // Chamar o loop
}

function clear() {
    ctx.clearRect(0, 0, gameScreen.size.x, gameScreen.size.y);
}