import { TILE_PX } from "../shared/sys_var.js";
import Vector from "../shared/vector.js";

const size = new Vector(
    window.innerWidth,
	window.innerHeight
)

const tiles = new Vector(
    Math.ceil((window.innerWidth / TILE_PX) + 2),
	Math.ceil((window.innerHeight / TILE_PX) + 2)
)

const center = new Vector(
		Math.round((window.innerWidth / TILE_PX) / 2),
		Math.round((window.innerHeight / TILE_PX) / 2)
)

export const gameScreen = {
    size,
    tiles,
    center
}