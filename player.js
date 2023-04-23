class player {
    constructor(beginGame,left,top,width,height,imgSrc) {
        this.beginGame = beginGame;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;

        
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";

        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.beginGame.appendChild(this.element);
    }

    move(){
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 200) {
            this.left = 200;
          }
          if (this.top < 20) {
            this.top = 20;
          }
          if (this.left > this.beginGame.offsetWidth - this.width - 200) {
            this.left = this.beginGame.offsetWidth - this.width - 200;
          }
          if (this.top > this.beginGame.offsetHeight - this.height - 20) {
            this.top = this.beginGame.offsetHeight - this.height - 20;
          }

        this.updatePosition();
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(enemy) {
        const playerRect = this.element.getBoundingClientRect();
        const enemyRect = enemy.element.getBoundingClientRect();
    
        if(
          playerRect.left < enemyRect.right &&
          playerRect.right > enemyRect.left && 
          playerRect.top < enemyRect.bottom &&
          playerRect.bottom > enemyRect.top
        ){
          console.log("COLLISION@ 💥💥💥💥💥");
          return true
        } else {
          return false;
        }
      }
    }
