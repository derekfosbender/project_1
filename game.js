class Game {
    constructor(){
      this.beginScreen = document.getElementById("screen-intro");
      this.beginGame = document.getElementById("gaming-screen");
      this.theEnd = document.getElementById("the-end");
      this.points = document.getElementById("points");
      this.lives = document.getElementById("lives");
      this.player = new player(
        this.beginGame,
        200,
        200,
        200,
        200,
        "player.png"
      );
      this.enemies = [];
      this.height = 500;
      this.width = 700;
      this.lives = 2;
      this.score = 0;
      this.end = false;
    }
  start() {  
    this.beginGame.style.height = '${this.height}px';  

    this.beginGame.style.width = '${this.width}px'; 
    
    this.beginScreen.style.display = "none";

    this.beginGame.style.display = "block";

}
}