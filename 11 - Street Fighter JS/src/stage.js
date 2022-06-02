
const  background = document.querySelector('img[alt="background"]');

export function drawBackground(context){
    context.drawImage(background, 0,0);
}

export class Stage{
    constructor(){
        this.image = document.querySelector('img[alt="background"]');
    }

    draw(context){
        context.drawImage(this.image,0,0);
    }
}