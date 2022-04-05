class OverworldMap{
    constructor(config){
        this.gameObject = config.gameObject;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperImage;

        drawLowerImage(ctx){
            ctx.drawImage(this.lowerImage,0,0)
        }

        drawUpperImage(ctx){
            ctx.drawImage(this.upperImage,0,0)
        }
    }
}