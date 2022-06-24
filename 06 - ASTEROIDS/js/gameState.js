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

        this.canvasWidth = game.canvas.ctx.width;
        this.canvasHeight = game.canvas.ctx.height;

        this.generateLvl();
    },  

    generateLvl: function(){
        var num = 3;
        this.asteroids = [];
        for(var i = 0; i < num; i++){
                var n = Math.round(Math.random()*(Points.ASTEROIDS.length-1))
                var poly = new Asteroid(Points.ASTEROIDS[n],10,100,100)
                poly.maxX = this.canvasWidth;
                poly.maxY = this.canvasHeight;
                this.asteroids.push(poly);
            }
    },

    update: function(){
        for (var i = 0; len = this.asteroids.length, i < len; i++){
            this.asteroids[i].update();
        }
    },

    render: function(ctx){
        ctx.clearAll();
        for (var i = 0; len = this.asteroids.length, i < len; i++){
            this.asteroids[i].draw(ctx);
        }
    }
})