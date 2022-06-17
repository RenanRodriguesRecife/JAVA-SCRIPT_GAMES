var canvas;
var ctx;
var FPS = 60;

var canvasWidth = 500;
var canvasHeight = 500;

var scenery;

const wallColor = '#000000';
const floorColor = '#666666';

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
        this.heightT = parseInt(this.heightC/this.heightM);
        this.widthT = parseInt(this.widthC/this.widthM)
    }

    draw(){
        var color;
        for(var y=0; y<this.heightM;y++){
            for(var x=0;x<this.widthM;x++){
                if(this.matriz[y][x]==1){
                    color = wallColor;
                }else{
                    color = floorColor;
                }
                this.ctx.fillStyle = color;
                this.ctx.fillRect(x * this.widthT,y * this.heightT,this.widthT,this.heightT);
            }
        }
    }
}

function init(){
    canvas = document.getElementById('canvas');
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
    scenery.draw();
}