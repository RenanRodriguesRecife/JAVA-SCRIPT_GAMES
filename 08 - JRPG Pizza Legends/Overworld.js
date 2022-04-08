class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
        this.directionInput = null;
    }

    startGameLoop(){
        const step = () =>{

            //Clear off the canvas
            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)

            //Establish the camera person
            const cameraPerson = this.map.gameObject.hero;

            //Draw lower layer
            this.map.drawLowerImage(this.ctx,cameraPerson);

            //Draw Game Objects
            Object.values(this.map.gameObject).forEach(object =>{
                object.update({
                    arrow: this.directionInput.direction
                });
                object.sprite.draw(this.ctx, cameraPerson);
            })

            //Draw Upper Layer
            this.map.drawUpperImage(this.ctx,cameraPerson);

            
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init(){
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();
    }
}