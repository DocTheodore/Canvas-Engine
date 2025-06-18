import { gameScreen } from "../config/game_screen.js";
import inputHandler from "./inputhandler.js";
import keymap from "../config/keymap.js";
import { Debbug } from "../game.js";
import { socket, netdata } from "../netcode/network.js";
import { TILE_PX, WORLDSIZE_PX, WORLDSIZE_PY } from "../shared/sys_var.js";
import { LoadMap } from "./loadmap.js";
import Colors from "../shared/colors.js";
import Vector from "../shared/vector.js";
import Camera from "./camera.js";
import Tile from "./tile.js";

const ctx = gameScreen.canvas.getContext("2d");

//////// DEBBUG //////////
const view = Vector.zero;
const speed = 10;
//////////////////////////

export default function Main() {
    console.log("Iniciando [SideStory]");
    Setup();

    // Variaveis
    let lastTime = performance.now();
    let fps = { show : 0, count: 0 };

    Start();
    // Loop Principal
    function gameLoop(now){     
        // Configuração do DELTATIME
        const deltaTime = (now - lastTime) / 1000;
        fps.count = 1 / deltaTime;
        lastTime = now;

        // Reconfiguração do tamanho da tela
        gameScreen.Sizing(ctx);
        Camera.set

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

        Camera.setLimit(WORLDSIZE_PX, WORLDSIZE_PY); 
        Camera.setFocus(view);
    }

    function Update(dt) {
        if(inputHandler.wasTapped(keymap.jump)){ // Teste de Tecla
            console.log("Pulo pressionado!");

            view.addSelf(new Vector(speed, speed));
        }

        if(inputHandler.isPressed(keymap.left)) {
            view.addSelf(new Vector(-speed, 0));
        }
        if(inputHandler.isPressed(keymap.right)) {
            view.addSelf(new Vector(speed, 0));
        }
        if(inputHandler.isPressed(keymap.down)) {
            view.addSelf(new Vector(0, speed));
        }
        if(inputHandler.isPressed(keymap.up)) {
            view.addSelf(new Vector(0, -speed));
        }

        if(inputHandler.wasMouseClicked()) { // Teste de Mouse
            const pos = inputHandler.getWorldMousePos();
            console.log("Mouse: ", pos);

            socket.emit('spawnTile', {pos, type:netdata.myId});
        }
    }

    function lateUpdate(dt) {
        Debbug.Log("fps", fps.show);
        inputHandler.lateUpdate(); // Reset do Input
    }

    function Render(){
        // Limpar a tela
        clear();
        ctx.save();

        // Aplicar movimento de camera
        ctx.translate(-Camera.x, -Camera.y);
        ctx.scale(Camera.zoom, Camera.zoom);

        // ===============================
        // Renderização de tiles
        // ===============================
        
        netdata.tileMap.forEach((tile) => {
            LoadMap.setTile(tile.pos, tile.tile);
            //ctx.fillStyle = tile.color;
            //ctx.fillRect(tile.pos.x, tile.pos.y, TILE_PX, TILE_PX);
        })

        LoadMap.render(ctx, Camera.pos);
        
        // ===============================
        // Renderização de entidades
        // ===============================
        
        /*****/
        Camera.update();
        //console.log(Camera);
        
        // ===============================
        // Renderização de Ui
        // ===============================
        ctx.restore();
        /*****/
    }

    requestAnimationFrame(gameLoop); // Chamar o loop
}

function clear() {
    ctx.clearRect(0, 0, gameScreen.size.x, gameScreen.size.y);
}