const  background = document.querySelectorAll('img[alt="background"]');

export function drawBackground(){
    context.drawImage(background, 0,0);
}

