class Game {
    constructor(){
      this.beginScreen = document.getElementById("screen-intro");
      this.beginGame = document.getElementById("gaming-screen");
      this.theEnd = document.getElementById("the-end");
      this.thePoints = document.getElementById("points");
      this.theLives = document.getElementById("lives");
      this.player = new player(
        this.beginGame,
        200,
        350,
        150,
        200,
        "./result.png"
      );
      this.height = 500;
      this.width = 1350;
      this.enemies = [];
      this.lives = 2;
      this.points = 0;
      this.theEndGame = false;
    }
  start() {  
    this.beginGame.style.height = `${this.height}px`;  

    this.beginGame.style.width = `${this.width}px`; 
    
    this.beginScreen.style.display = "none";

    this.beginGame.style.display = "block";

    this.gameLoop()
}
gameLoop(){
  console.log("gaming");
  if(this.theEndGame){
    return;
  }
  this.update();
  window.requestAnimationFrame(() => this.gameLoop());
}
 update(){
  console.log("update")
  this.player.move();

  for(let i=0; i<this.enemies.length; i++){
    const enemy = this.enemies[i];

    enemy.move();
   if (this.player.didCollide(enemy)){
      
      this.lives --;
      this.theLives.innerText = this.lives;

      enemy.element.remove();
      this.enemies.splice(0, 1);
      i--;
    }
  }

  if(this.lives === 0){
    this.endGame();
  }

  if(Math.random() > 0.02 && this.enemies.length < 1){
    this.enemies.push(new Enemy(this.beginGame));
  }
}
endGame() {
  this.player.element.remove();
  this.enemies.forEach(enemy => enemy.element.remove());

  this.theEndGame = true;


  this.beginGame.style.display = "none";      
 
  this.theEnd.style.display = "block";
}
}