import { TILE_DT, TILE_PX } from "../shared/sys_var.js";
import Vector from "../shared/vector.js";
import Camera from "./camera.js";

class InputHandler {
    constructor() {
        this.keys = {};
        this.keyTimers = {};
        this.keyDown = {};
        this.keyUp = {};

        this.mouse = {
            pos: Vector.zero,
            buttons: {},
            buttonTimers: {},
            buttonDown: {},
            buttonUp: {}
        };

        this.initListeners();
    }

    initListeners() {
        // KEYDOWN
        window.addEventListener("keydown", (e) => {
            if(!this.keys[e.key]) {
                this.keys[e.key] = true;
                this.keyTimers[e.key] = performance.now();
                this.keyDown[e.key] = true;
            }
        });

        // KEYUP
        window.addEventListener("keyup", (e) => {
            this.keys[e.key] = false;
            this.keyUp[e.key] = true;
        });

        // MOUSEMOVE
        window.addEventListener("mousemove", (e) => {
            const rect = e.target.getBoundingClientRect();
            this.mouse.pos.x = e.clientX - rect.left;
            this.mouse.pos.y = e.clientY - rect.top;
        });

        // MOUSEDOWN
        window.addEventListener("mousedown", (e) => {
            if(!(this.mouse.buttons[e.button])){
                this.mouse.buttons[e.button] = true;
                this.mouse.buttonTimers[e.button] = performance.now();
                this.mouse.buttonDown[e.button] = true;
            }
        });

        // MOUSEUP
        window.addEventListener("mouseup", (e) => {
            this.mouse.buttons[e.button] = false;
            this.mouse.buttonUp[e.button] = true;
        });
    }

    // Keyboard Functions
    isPressed(key) {
        return !!this.keys[key];
    }
    wasTapped(key) {
        return !!this.keyDown[key];
    }
    wasReleased(key) {
        return !!this.keyUp[key];
    }
    getPressDuration(key) {
        return this.keys[key] ? performance.now() - this.keyTimers[key] : 0;
    }
    wasHeld(key, threshold=300) {
        return this.getPressDuration(key) >= threshold;
    }

    // Mouse Functions
    // Posição do Mouse
    getMousePos() { // Mouse na tela
        return this.mouse.pos.clone();
    }
    getTileMousePos() { // Tile em cima do mouse
        return new Vector(
            Math.floor(this.mouse.pos.x * TILE_DT),
            Math.floor(this.mouse.pos.y * TILE_DT)
        );
    }
    getFixedMousePos() { // posição em Tile*Pixel 
        return this.getTileMousePos().scal(TILE_PX);
    }
    getWorldMousePos() {
        const worldPos = this.worldPosition();
        return new Vector(
            Math.floor(worldPos.x * TILE_DT),
            Math.floor(worldPos.y * TILE_DT)       
        )
    }
    // Ações do Mouse
    isMouseDown(button = 0) {
        return !!this.mouse.buttons[button];
    }
    wasMouseClicked(button = 0) {
        return !!this.mouse.buttonDown[button];
    }
    wasMouseReleased(button = 0) {
        return !!this.mouse.buttonUp[button];
    }
    getClickDuration(button = 0) {
        return this.mouse.buttons[button] ? performance.now() - this.mouse.buttonTimers[button] : 0;
    }
    wasMouseHeld(button =0, threshold = 300) {
        return this.getClickDuration(button) >= threshold;
    }

    // Frame Clear
    lateUpdate() {
        this.keyDown = {};
        this.keyUp = {};
        this.mouse.buttonDown = {};
        this.mouse.buttonUp = {};
    }

    worldPosition() {
        const x = this.mouse.pos.x;
        const y = this.mouse.pos.y;

        const worldX = x / Camera.zoom + Camera.x;
        const worldY = y / Camera.zoom + Camera.y;

        return new Vector(worldX, worldY);
    }
}

const inputHandler = new InputHandler(); // Singleton para evitar duplicação de inputs
export default inputHandler;