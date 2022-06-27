var InputHandeler = Class.extend({
    init: function(keys){
        this.keys = {},
        this.down = {},
        this.pressed = {};

        for(key in keys){
            var code = keys[key];
            
            this.keys[code] = key;
            this.down[key] = false;
            this.pressed[key] = false;
        }

        var self = this;
        document.addEventListener("keydown",function(evt){

        });
        document.addEventListener("keyup",function(evt){

        });
    }
})