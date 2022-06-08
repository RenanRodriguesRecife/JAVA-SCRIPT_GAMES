class Person extends GameObject{
    constructor(config){
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up": ["y",-1],
            "down": ["y",1],
            "left": ["x",-1],
            "right": ["x",1],
        }
    }

    update(state){
        if(this.movingProgressRemaining > 0){
            this.updatePosition();
        }else{




            //Teclado liberado e arrow key pressed
            if(this.isPlayerControlled && state.arrow){
                this.startBehavior(state,{
                    type:"walk",
                    direction: state.arrow
                })
            }
            this.updateSprite(state);
        }
    }

    startBehavior(state, behavior){
        //definir a direção do personagem para qualquer comportamento que ele tenha
        this.direction = behavior.direction;
        //Para aqui se o espaço não é livre
        if(behavior.type === "walk"){
            if(state.map.isSpaceTaken(this.x, this.y,this.direction)){
                return;
            }
            //pronto para andar
            state.map.moveWall(this.x, this.y, this.direction);
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition(){
        
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -=1;

            if(this.movingProgressRemaining === 0){
                // terminou de andar
                
            }
        
    }

    updateSprite(state){

        if(this.movingProgressRemaining > 0){
            this.sprite.setAnimation("walk-"+this.direction);
            return;
        }

        this.sprite.setAnimation("idle-"+this.direction);
        
    }
}