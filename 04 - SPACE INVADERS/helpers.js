//HELPER FUNCTIONS


//SCREEN
function Screen(width, height){
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.ctx = this.canvas.getContext("2d");

}

Screen.prototype.drawSprite = function(sp, x, y){
    this.ctx.drawImage(sp.img, sp.x, sp.y,sp.w,sp.h, x, y, sp.w, sp.h);
}

//SPRITE
function Sprite(img, x, y, w,h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

//INPUTHANDELER
function InputHandeler(){};

InputHandeler.prototype.isDown = function(code){

}

//3:30