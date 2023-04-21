window.onload = function () {
    const beginButton = document.getElementById("begin-game");
    let game;
    beginButton.addEventListener("click", function() {
      beginGame();
    });

function beginGame() {

    console.log("begin game");

    game = new Game();
    game.start();
}
}