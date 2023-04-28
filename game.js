class Game {
    constructor(){
      this.beginScreen = document.getElementById("screen-intro");
      this.beginGame = document.getElementById("gaming-screen");
      this.theEnd = document.getElementById("the-end");
      this.thePoints = document.getElementById("points");
      this.theLives = document.getElementById("lives");
      this.player = new player(
        this.beginGame,
        100,
        250,
        50,
        100,
        "./result.png"
      );
      this.height = 500;
      this.width = 1350;
      this.enemies = [];
      this.crazies = [];
      this.coins = [];
      this.extras = [];
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
  let myAudi = document.querySelector('#audi')
  myAudi.play();
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
   
   if(enemy.right > this.width){
   enemy.element.remove();
   this.enemies.splice(0,1);
   i--;
   
   }else if (this.player.didCollide(enemy)){
      enemy.element.remove();
      
      this.enemies.splice(0, 1);
      
      this.lives --;
      
      this.theLives.innerText = this.lives;
      
      i--;
    }
  }

  if(this.lives === 0){
    this.endGame();
  }

  if(Math.random() > 0.98 && this.enemies.length < 1){
    this.enemies.push(new Enemy(this.beginGame));
  }
  for(let i=0; i<this.coins.length; i++){
    const coin  = this.coins[i];
    coin.move();
  if(coin.right > this.width){
      coin.element.remove();
      this.coins.splice(0,1);
      i--;
      
      }else if (this.player.didCollide(coin)){
         coin.element.remove();
         
         this.coins.splice(0, 1);
         
         this.points ++;
         
         this.thePoints.innerText = this.points;
         
         i--;
       }
     }
     if(Math.random() > 0.98 && this.coins.length < 1){
      this.coins.push(new Coin(this.beginGame));
}
for(let i=0; i<this.crazies.length; i++){
  const crazy  = this.crazies[i];
  crazy.move();
if(crazy.right > this.width){
    crazy.element.remove();
    this.crazies.splice(0,1);
    i--;
    
    }else if (this.player.didCollide(crazy)){
       crazy.element.remove();
       
       this.crazies.splice(0, 1);
       
       this.endGame();
       
       i--;
     }
   }
   if(Math.random() > 0.98 && this.crazies.length < 1){
    this.crazies.push(new Crazy(this.beginGame));
}
for(let i=0; i<this.extras.length; i++){
  const extra  = this.extras[i];
  extra.move();
if(extra.right > this.width){
    extra.element.remove();
    this.extras.splice(0,1);
    i--;
    
    }else if (this.player.didCollide(extra)){
       extra.element.remove();
       
       this.extras.splice(0, 1);
       this.lives ++;
      
      this.theLives.innerText = this.lives;
       
       
       i--;
     }
   }
   if(Math.random() > 0.98 && this.extras.length < 1){
    this.extras.push(new Extra(this.beginGame));
 }
}
endGame() {
  this.player.element.remove();
  this.enemies.forEach(enemy => enemy.element.remove());

  this.theEndGame = true;


  this.beginGame.style.display = "none";      
 
  this.theEnd.style.display = "block";
  let myAudio = document.querySelector('#audio')
  myAudio.play();
}
}