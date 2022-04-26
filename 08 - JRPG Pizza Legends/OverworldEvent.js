class OverworldEvent{
    constructor({map, event}){
        this.map = map;
        this.event = event;
    }

    stand(resolver){

    }

    walk(resolver){
        const who = this.map.gameObjects[this.event.who];
        who.startBehavior({
            map: this.map
        },{
            type: "walk",
            direction: this.event.direction
        })
    }

    init(){
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}