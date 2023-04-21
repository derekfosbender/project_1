class player {
    constructor(beginGame,top,left,width,height,directionX,directionY,imageElement) {
        this.beginGame = beginGame;
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;

        
        this.element = document.createElement("img");
        this.element.src = imageElement;

        this.beginGame.appendChild(this.element);
    }

}