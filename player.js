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
          return true
        } else {
          return false;
        }
      }
      didCollide(coin) {
        const playerRect = this.element.getBoundingClientRect();
        const coinRect = coin.element.getBoundingClientRect();
    
        if(
          playerRect.left < coinRect.right &&
          playerRect.right > coinRect.left && 
          playerRect.top < coinRect.bottom &&
          playerRect.bottom > coinRect.top
        ){
          return true
        } else {
          return false;
        }
      }
      didCollide(crazy) {
        const playerRect = this.element.getBoundingClientRect();
        const crazyRect = crazy.element.getBoundingClientRect();
    
        if(
          playerRect.left < crazyRect.right &&
          playerRect.right > crazyRect.left && 
          playerRect.top < crazyRect.bottom &&
          playerRect.bottom > crazyRect.top
        ){
          return true
        } else {
          return false;
        }
      }
      didCollide(extra) {
        const playerRect = this.element.getBoundingClientRect();
        const extraRect = extra.element.getBoundingClientRect();
    
        if(
          playerRect.left < extraRect.right &&
          playerRect.right > extraRect.left && 
          playerRect.top < extraRect.bottom &&
          playerRect.bottom > extraRect.top
        ){
          return true
        } else {
          return false;
        }
      }
    }
