var Points = {
    ASTEROIDS:[
        [-4,-2,-2,-4,0,-2,2,-4,4,-2,3,0,4,2,1,4,-2,4,-4,2,-4,-2],
        [-3,0,-4,-2,-2,-4,0,-3,2,-4,4,-2,2,-1,4,1,2,4,-1,3,-2,4,-4,2,-3,0],
        [-2,0,-4,-1,-1,-4,2,-4,4,-1,4,1,2,4,0,4,0,1,-2,4,-4,1,-2,0],
        [-1,-2,-2,-4,1,-4,4,-2,4,-1,1,0,4,2,2,4,1,3,-2,4,-4,1,-4,1,-4,-2,-1,-2],
        [-4,-2,-2,-4,2,-4,4,-2,4,2,2,4,-2,4,-4,2,-4,-2]
    ],
    SHIP: [-2,0,-3,-3,6,0,-3,3,-2,0]

}


var GameState = State.extend({
    init: function(game){
        this._super(game);

        this.canvasWidth = game.canvas.ctx.width;
        this.canvasHeight = game.canvas.ctx.height;

        this.ship = new Ship(Points.SHIP, 2, this.canvasWidth/2,this.canvasHeight/2);
        this.ship.maxX = this.canvasWidth;
        this.ship.maxY = this.canvasHeight;

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

    handleInputs: function(input){
        if(input.isDown('right')){
            this.ship.rotate(0.06)    
        }
        if(input.isDown('left')){
            this.ship.rotate(-0.06)
        }
        if(input.isDown('up')){
            this.ship.addVel();
        }
    },

    update: function(){
        for (var i = 0; len = this.asteroids.length, i < len; i++){
            this.asteroids[i].update();
        }
        this.ship.update();
    },

    render: function(ctx){
        ctx.clearAll();
        for (var i = 0; len = this.asteroids.length, i < len; i++){
            this.asteroids[i].draw(ctx);
        }
        this.ship.draw(ctx);
    }
})