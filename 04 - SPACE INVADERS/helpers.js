//HELPER FUNCTIONS


//SCREEN
function Screen(width, height){
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.ctx = this.canvas.getContext("2d");
    
}

Screen.prototype.drawSprite = function(sp, x, y){

}

//SPRITE
function Sprite(img, x, y, w,h){

}

//INPUTHANDELER
function InputHandeler(){};

InputHandeler.prototype.isDown = function(code){

}

//3:30