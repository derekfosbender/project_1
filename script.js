window.onload = function () {
    const beginButton = document.getElementById("begin-game");
    const retryButton = document.getElementById("retry-button")
    let game;
    beginButton.addEventListener("click", function() {
      beginGame();
    });
    retryButton.addEventListener("click", function() {
      retryGame();
    })
    function retryGame() {
        location.reload();
    } 
    

function beginGame() {

    console.log("begin game");

    game = new Game();
    game.start();
}
function handleKeydown(event) {
    const key = event.key;

    const possibleKeystrokes = ["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"];

    if(possibleKeystrokes.includes(key)){
        event.preventDefault();

        switch(key){
            case "ArrrowLeft":
            game.player.directionX = -1;
            break;
            case "ArrowUp":
            game.player.directionY = -1;
            break;
            case "ArrowRight":
            game.player.directionX = 1;
            break;
            case "ArrowDown":
            game.player.directionY = 1;
            break;

        }
    }
}
window.addEventListener("keydown", handleKeydown);
};

