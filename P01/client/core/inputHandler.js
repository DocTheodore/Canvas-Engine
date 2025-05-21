const keys = {};

const InputHandler = {
    init() {
        document.addEventListener("keydown", (e) => {
            keys[e.key.toLowerCase()] = true;
        });

        document.addEventListener("keyup", (e) => {
            keys[e.key.toLowerCase()] = false;
        });
    },

    isPressed(key) {
        console.log(key);
        return !!keys[key.toLowerCase()];
    },

    anyPressed(...keyList) {
        return keyList.some(k => keys[k.toLowerCase()]);
    },

    getState() {
        return { ...keys }; // retorna uma cópia
    }
};

export default InputHandler;