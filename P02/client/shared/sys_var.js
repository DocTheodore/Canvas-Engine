
// =========================================
// Renderização
// =========================================
export const TILE_PX = 16;              // Tamanho dos tiles em pixel
export const TILE_DT = 1 / TILE_PX;     // Fração do tamanho do pixel


// =========================================
// Calculos do sistema
// =========================================
export const DEG2RAD = (Math.PI / 180); // Função numérica para conversões de graus para radianos


// =========================================
// Configurações do Mapa
// =========================================
export const WORLDSIZE_X = 2000; // Tamanho do mapa em tiles
export const WORLDSIZE_Y = 2000;

export const WORLDSIZE_PX = WORLDSIZE_X * TILE_PX; // Tamanho do mapa em pixels
export const WORLDSIZE_PY = WORLDSIZE_Y * TILE_PX;