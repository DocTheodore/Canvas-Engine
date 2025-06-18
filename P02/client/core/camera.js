import { gameScreen } from "../config/game_screen.js";
import Vector from "../shared/vector.js";

class _Camera {
    constructor(x=0, y=0, w=gameScreen.size.x, h=gameScreen.size.y, zoom=1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.focus = null; // Posição que a camera vai seguir
        this.zoom = zoom;
        this.borderW = 0;
        this.borderH = 0;
    }

    get pos() {
        return new Vector(this.x, this.y);
    }
    set pos(pos=Vector.zero) {
        this.x = pos.x;
        this.y = pos.y;
    }

    get size() {
        return new Vector(this.w, this.h);
    }
    set size(size=Vector.zero) {
        this.w = size.x;
        this.h = size.y;
    }

    setFocus(pos) {
        this.focus = pos;
    }

    setLimit(width, height) {
        this.borderW = width;
        this.borderH = height;  
    }

    setZoom(zoom) {
        if(zoom >= 1 && !isNaN(zoom)) this.zoom = zoom;
    }

    get center() {
        return new Vector(this.x + this.w / 2, this.y + this.h / 2);
    }

    // Atualização da camera
    update() {
        // Primeiro, aplicar o zoom e ajustar dimensões da câmera
        const scale = this.zoom || 1;
        this.w = gameScreen.size.x * scale;
        this.h = gameScreen.size.y * scale;

        // Seguir o foco suavemente
        if (this.focus) {
            const focusX = this.focus.x - this.w / 2;
            const focusY = this.focus.y - this.h / 2;

            this.x += (focusX - this.x) * 0.1;
            this.y += (focusY - this.y) * 0.1;
        }

        // Aplicar limites simétricos (com origem no centro)
        if (this.borderW && this.borderH) {
            const minX = -this.borderW / 2;
            const maxX = this.borderW / 2 - this.w;
            const minY = -this.borderH / 2;
            const maxY = this.borderH / 2 - this.h;

            this.x = Math.max(minX, Math.min(this.x, maxX));
            this.y = Math.max(minY, Math.min(this.y, maxY));
        }
    }

}

const Camera = new _Camera();
export default Camera;