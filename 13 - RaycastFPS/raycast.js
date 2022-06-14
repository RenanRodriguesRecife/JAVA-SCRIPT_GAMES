var canvas;
var ctx;
var FPS = 60;

var canvasWidth = 500;
var canvasHeight = 500;

function init(){
    canvas = document.getElementById('canvas');
    console.log(canvas)
    ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}