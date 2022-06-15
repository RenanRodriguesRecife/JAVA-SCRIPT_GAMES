var States = {
    NO_CHANGE: 0,
    MENU: 1,
    GAME: 2,
    END: 3
}


var Game = Class.extend({
    init: function(){
        this.canvas = new Canvas(640, 480);

        this.currentState = null;
        this.nextState = States.GAME;
    },

    run: function(){
        this.canvas.animate(function(){
           if(self.nextState !== States.NO_CHANGE){
            switch(self.nextState){
                case States.MENU:
                case States.GAME:
                case States.END:
            }
            self.nextState = States.NO_CHANGE;
           }
        });
    }
})