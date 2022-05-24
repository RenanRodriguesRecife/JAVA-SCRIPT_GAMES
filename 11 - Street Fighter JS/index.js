const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
}

window.onload = function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const [ryu, background] = document.querySelectorAll('img');
    
    const position = {
        x: GameViewport.WIDTH/2 - ryu.width/2,
        y: 110,
    }

    let velocity = 1;


    function frame(){
        position.x += velocity;

        if(position.x > GameViewport.WIDTH - ryu.width|| position.x < 0){
            velocity = -velocity;
        }

        // context.clearRect(0, 0,GameViewport.WIDTH,GameViewport.HEIGHT);
        context.drawImage(background, 0,0);

        // context.strokeStyle = 'yellow';
        // context.moveTo(0, 0);
        // context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        // context.moveTo(GameViewport.WIDTH, 0);
        // context.lineTo(0, GameViewport.HEIGHT);
        // context.stroke();
    
        context.drawImage(ryu,position.x,position.y);
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);

    console.log(context)
}


//função frame loop
// exemplo ruim 1
// while(running){
//     doStuff();
// }

// exemplo ruim 1
// setInterval(frame, 60/1000);
// function frame(){
//     doStuff();
// }

// bom exemplo
// window.requestAnimationFrame(frame);
// function frame(){
//     doStuff();
//     window.requestAnimationFrame(frame);
// }