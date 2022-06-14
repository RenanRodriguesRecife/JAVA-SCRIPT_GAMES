var canvas;
var ctx;
var FPS = 60;

var canvasWidth = 500;
var canvasHeight = 500;

var level1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,0,0,0,0,1,1,0,0,1],
    [1,0,0,0,0,1,1,0,0,1],
    [1,0,0,1,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
]

function init(){
    canvas = document.getElementById('canvas');
    console.log(canvas)
    ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

        setInterval(function(){main();},1000/FPS)
}

function eraseCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

function main(){
    console.log("frame")
}