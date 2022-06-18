var GameState = State.extend({
    init: function(game){
        this._super(game);

        this.poly = new Polygon([-1,-1,1,1,-1,1,-1,-1])
        this.poly.scale(10);
    },  

    update: function(){
        
    }
})