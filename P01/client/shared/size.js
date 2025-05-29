export const tileSize = 16;

export default function getSides(pos, size) {
    return {
        center: { 
            x: pos.x + size.x / 2, 
            y: pos.y + size.y / 2
        },
        right: pos.x + size.x,
        left: pos.x,
        up: pos.y,
        down: pos.y + size.y
    }
}