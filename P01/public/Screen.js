export default class Screen {
    static instance = null;
    element = null;
    canvasContext = null;

    constructor() {
        if (Screen.instance) {
            throw new Error("Use Screen.getInstance() para criar a instância.");
        }

        Screen.element = document.createElement("canvas");
    }

    static getInstance() {
        if (!Screen.instance) {
            Screen.instance = new Screen();
        }

        return Screen.instance;
    }

    start() {
        Screen.element.width = 1280;
        Screen.element.height = 640;
        Screen.canvasContext = Screen.element.getContext("2d");
        document.body.insertBefore(Screen.element, document.body.childNodes[0]);
    }

    clear() {
        Screen.canvasContext.clearRect(0, 0, Screen.element.width, Screen.element.height);
    }
}


