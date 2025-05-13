//Variaveis
let cube;
let cube2;

//Função de Inicialização
function startGame() {
    gameArea.start();
    cube = new Entity(32, 32, 300, 300, gameArea.ctx, '#0f4');
    cube2 = new Entity(16, 16, 600, 300, gameArea.ctx, '#04f');
    gameArea.update();
}

//Canvas
const gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1280;
        this.canvas.height = 640;
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    update : function(){
        this.interval = setInterval(updateLoop, 1000/60);
    },
    clear : function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}

startGame();
function updateLoop(){
    gameArea.clear();
    cube.Drawn();
    cube2.Drawn();
}