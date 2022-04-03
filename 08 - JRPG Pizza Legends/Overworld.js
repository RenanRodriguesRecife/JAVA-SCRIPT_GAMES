class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init(){

        //map
        const image = new Image();
        image.onload = () =>{
             this.ctx.drawImage(image,0,0);

        };
        image.src = "./images/maps/DemoLower.png";


        //Place game objects
        const hero = new GameObject({
            x: 5,
            y: 6,

        })

        const npc1 = new GameObject({
            x: 7,
            y: 9,
            src: "./images/characters/people/npc1.png"
        })

        //set time out para dar tempo de carregar as imágens
        setTimeout(()=> {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        },200)
        
    }
}