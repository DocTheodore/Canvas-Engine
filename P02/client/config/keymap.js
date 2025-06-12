class KeyMap {
    constructor() {
        // Teclas padrão
        this._map = {}
        this.resetDefaults();
    }

    resetDefaults() {
    this._map = {
            'left' : 'a',
            'right' : 'd',
            'up' : 'w',
            'down' : 's',
            'jump' : ' '
        };
    }

    // Funções para registro de teclas/ações
    getKey(action) {
        return this._map[action];
    }
    setKey(action, key) {
        this._map[action] = key;
    }

    // get de teclas
    get left() {return this.getKey('left')}
    get right() {return this.getKey('right')}
    get up() {return this.getKey('up')}
    get down() {return this.getKey('down')}
    get jump() {return this.getKey('jump')}
}

const keyMap = new KeyMap();
export default keyMap;