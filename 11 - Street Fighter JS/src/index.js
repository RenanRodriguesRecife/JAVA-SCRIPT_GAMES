import { Ryu } from './ryu.js';
import { Ken } from './ken.js';
import { Stage } from './stage.js';


const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
}

window.onload = function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const ken = new Ken(80, 110, -1);
    const ryu = new Ryu(80,110,1);
    const stage = new Stage();

    function frame(){
        ryu.update(context);
        ken.update(context);
        stage.draw(context);
        ryu.draw(context);
        ken.draw(context);
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