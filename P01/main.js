//Variaveis
let quit = false;
let cubes = []


//Função de Inicialização
function startGame() {
    gameArea.start();
    cube = new Entity(32, 32, 0, 288, gameArea.ctx, '#0f4');
    cube2 = new Entity(16, 16, 640, 320, gameArea.ctx, '#04f');
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
        if(!quit) GameLoop();
    },
    clear : function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function GameLoop(currentTime){
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    Update(deltaTime);
    Render();

    requestAnimationFrame(GameLoop);
}


function Update(dt){
    
}

function Render(){

}


function quitGame(){
    if(!quit) quit = true;
    else {
        quit = false;
        startGame()
    };
}
startGame();