import { Ryu } from './entities/Fighters/Ryu.js';
import { Ken } from './entities/Fighters/Ken.js';
import { Stage } from './stage.js';
import { FpsCounter } from './FpsCounter.js';

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
}

window.addEventListener('load', function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const entities = [
        new Stage(),
        new Ken(80, 110, -50),
        new Ryu(80,110,50),
        new FpsCounter()
    ]
    

    let previousTime = 0;
    let secondsPassed = 0;

    function frame(time){
        window.requestAnimationFrame(frame);
        secondsPassed = (time - previousTime)/1000;
        previousTime = time;


        for(const entity of entities){
            entity.update(secondsPassed,context);
        }

        for(const entity of entities){
            entity.draw(context);
        }
    }

    window.requestAnimationFrame(frame);

    console.log(context)
});


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