class GameObject{
    constructor(config){
        this.id = null;
        this.isMounted = false;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject:this,
            src: config.src || "./images/characters/people/hero.png",
        });

        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;
    }

    mount(map){
        console.log("mounting")
        this.isMounted = true;
        map.addWall(this.x, this.y);

        //se tem um conportamento, incia depois de um pequeno atraso
        setTimeout(()=>{
            this.doBehaviorEvent(map);
        },10)
    }

    update(){

    }

    async doBehaviorEvent(map){

        if(map.isCutscenesPlaying || this.behaviorLoop.length === 0){
            return;
        }

        //configurando a informação do evento com informação relevante
        let event = this.behaviorLoop[this.behaviorLoopIndex];
        eventConfig.who = this.id;

        const eventHandler = new OverworldEvent({map, event: eventConfig});
        await eventHandler.init();

        //próximo evento para rodar
        this.behaviorLoopIndex += 1;
        if(this.behaviorLoopIndex === this.behaviorLoop.length){
            this.behaviorLoopIndex = 0;
        }

        //faz tuto de novo
        this.doBehaviorEvent(map);
    }
}