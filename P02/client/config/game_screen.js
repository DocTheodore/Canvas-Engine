import { TILE_PX } from "../shared/sys_var.js";
import Vector from "../shared/vector.js";

// Tamanho da Tela atual
let size = new Vector(
    window.innerWidth,
	window.innerHeight
)

// Tamanho da Tela atual em pixels
let tiles = new Vector(
    Math.ceil((window.innerWidth / TILE_PX) + 2),
	Math.ceil((window.innerHeight / TILE_PX) + 2)
)

// Centro da tela
let center = new Vector(
    Math.round((window.innerWidth / TILE_PX) / 2),
    Math.round((window.innerHeight / TILE_PX) / 2)
)

// contexto do canvas
const canvas = document.getElementById("GameScreen");
canvas.width = size.x;
canvas.height = size.y;

// Redimensionar tela
function Sizing(ctx, Camera) {
    if(size.x === window.innerWidth && size.y === window.innerHeight) return // Se o tamanho for o igual, ignorar função

    size = new Vector(
        window.innerWidth,
        window.innerHeight
    )

    tiles = new Vector(
        Math.ceil((window.innerWidth / TILE_PX) + 2),
        Math.ceil((window.innerHeight / TILE_PX) + 2)
    )

    center = new Vector(
        Math.round((window.innerWidth / TILE_PX) / 2),
        Math.round((window.innerHeight / TILE_PX) / 2)
    )

    ctx.canvas.width = size.x;
    ctx.canvas.height = size.y;
}

export const gameScreen = {
    size,
    tiles,
    center,
    canvas,
    Sizing
}