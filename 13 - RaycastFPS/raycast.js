var canvas;
var ctx;
var FPS = 60;

var canvasWidth = 500;
var canvasHeight = 500;

var scenery;

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

class Level{
    constructor(can,ctx,arr){
        this.canvas = can;
        this.ctx = ctx;
        this.matriz = arr;

        // dimenções da matriz
        this.heightM = this.matriz.length;
        this.widthM = this.matriz[0].length;

        // dimenções reais do canvas
        this.heightC = this.canvas.height;
        this.widthC = this.canvas.width;

        //dimenções dos tales
        this.heightT = parseInt(this.heightC, this.heightM);
        this.widthT = parteInt(this.width/this.widthM)
    }
}

function init(){
    canvas = document.getElementById('canvas');
    console.log(canvas)
    ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    scenery = new Level(canvas,ctx,level1);

    setInterval(function(){main();},1000/FPS)
}

function eraseCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

function main(){
    console.log("frame")
}