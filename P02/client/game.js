import { gameScreen } from "./config/game_screen.js";
import Main from "./core/main.js";

// Funções que interagem com o html da pagina de alguma forma
// Debbug
export const Debbug = {
        Log: (type, text) => {
        document.getElementById(type).innerHTML = text;
    }
}

window.onload = Main(); // Executar o jogo