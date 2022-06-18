var Points = {
    ASTEROIDS:[
        [-4,-2,-2,-4,0,-2,2,-4,4,-2,3,0,4,2,1,4,-2,4,-4,2,-4,-2],
        [-3,0,-4,-2,-2,-4,0,-3,2,-4,4,-2,2,-1,4,1,2,4,-1,3,-2,4,-4,2,-3,0],
        [-2,0,-4,-1,-1,-4,2,-4,4,-1,4,1,2,4,0,4,0,1,-2,4,-4,1,-2,0],
        [-1,-2,-2,-4,1,-4,4,-2,4,-1,1,0,4,2,2,4,1,3,-2,4,-4,1,-4,1,-4,-2,-1,-2],
        [-4,-2,-2,-4,2,-4,4,-2,4,2,2,4,-2,4,-4,2,-4,-2]
    ]
}


var GameState = State.extend({
    init: function(game){
        this._super(game);

        var n = Math.round(Math.random()*(Points.ASTEROIDS.length-1))
        this.poly = new Asteroid(Points.ASTEROIDS[n],10,100,100)
        
    },  

    update: function(){
        this.poly.update();
    },

    render: function(ctx){
        ctx.clearAll();
        this.poly.draw(ctx);
    }
})