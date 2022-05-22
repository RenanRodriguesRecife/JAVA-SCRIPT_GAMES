const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 4,
}

window.onload = function(){
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = 384;
    canvasEl.height = 224;

    canvasEl.style.width = `${GameViewport.WIDTH * GameViewport.SCALE}px`;
    canvasEl.style.height = `${GameViewport.HEIGHT * GameViewport.SCALE}px`;

    console.log(context)
}