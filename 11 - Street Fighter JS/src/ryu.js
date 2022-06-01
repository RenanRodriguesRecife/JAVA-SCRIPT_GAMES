const ryu  = document.querySelectorAll('img[alt="ryu"]');

const position = {
    x: GameViewport.WIDTH/2 - ryu.width/2,
    y: 110,
}

let velocity = 1;

export function updateRyu(){
    position.x += velocity;

    if(position.x > GameViewport.WIDTH - ryu.width|| position.x < 0){
        velocity = -velocity;
    }
}

export function drawRyu(){
    context.drawImage(ryu,position.x,position.y);
}
