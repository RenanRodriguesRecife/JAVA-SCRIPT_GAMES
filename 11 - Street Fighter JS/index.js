const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 3,
}

window.onload = function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = 384;
    canvasEl.height = 224;

    canvasEl.style.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`;
    canvasEl.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`;

    context.strokeStyle = 'yellow';
    context.moveTo(0, 0);
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    context.moveTo(GameViewport.WIDTH, 0);
    context.lineTo(0, GameViewport.HEIGHT);
    context.stroke();

    console.log(context)
}