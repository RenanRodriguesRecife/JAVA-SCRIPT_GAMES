class Sprite{
    constructor(config){

        //config Animation & Initial state
        this.animations = config.animations || {
            idleDown:[
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;
    }
}