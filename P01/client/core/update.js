let timer = 0;

export default function Update(dt){
    timer += dt;
    console.log(Math.floor(timer));
}