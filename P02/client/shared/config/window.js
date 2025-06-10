import Vector from "../../engine/utils/math/vector.js";
import { TILE_SIZE } from "./const.js";

export const gameScreen = {
    size : new Vector(
        window.innerWidth, 
        window.innerHeight
    ),
    tiles : new Vector(
        Math.ceil(window.innerWidth / TILE_SIZE) + 2,
        Math.ceil(window.innerHeight / TILE_SIZE) + 2
    ),
    center: new Vector(
        Math.round(window.innerWidth / TILE_SIZE) / 2,
        Math.round(window.innerHeight / TILE_SIZE) / 2
    )
}