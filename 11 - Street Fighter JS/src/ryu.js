const ryu  = document.querySelector('img[alt="ryu"]');

const position = {
    // x: GameViewport.WIDTH/2 - ryu.width/2,
    x: 80,
    y: 110,
}

let velocity = 1;

export function updateRyu(context){
    position.x += velocity;

    if(position.x > context.canvas.width - ryu.width|| position.x < 0){
        velocity = -velocity;
    }
}

export function drawRyu(context){
    context.drawImage(ryu,position.x,position.y);
}
