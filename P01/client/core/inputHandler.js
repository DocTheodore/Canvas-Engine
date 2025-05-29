const keys = {};
const seenKeys = new Set();

const InputHandler = {
    init() {
        console.log("Input iniciado: ");
        document.addEventListener("keydown", (e) => {
            const key = e.key.toLowerCase();
            keys[key] = true;
            seenKeys.add(key);
        });

        document.addEventListener("keyup", (e) => {
            const key = e.key.toLowerCase();
            keys[key] = false;
            seenKeys.add(key);
        });
    },

    isPressed(key) {
        return !!keys[key.toLowerCase()];
    },

    anyPressed(...keyList) {
        return keyList.some(k => keys[k.toLowerCase()]);
    },

    getPressedKeys() {
        return Object.keys(keys).filter(k => keys[k]);
    },

    getUnpressedKeys() {
        return Array.from(seenKeys).filter(k => !keys[k]);
    },

    getState() {
        return { ...keys }; // retorna uma cópia
    }
};

export default InputHandler;