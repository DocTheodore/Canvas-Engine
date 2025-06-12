import { gameScreen } from "../config/game_screen.js";

export default function Main(){
    console.log("Iniciando [SideStory]");

    gameStart();
}

function gameStart() {
    console.log("SIZE: ", gameScreen.size);
    console.log("TILES: ", gameScreen.tiles);
    console.log("CENTER: ", gameScreen.center);
}