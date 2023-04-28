class Coin {
    constructor(beginGame) {
        this.beginGame = beginGame;
        this.right = 20;
        this.top = Math.floor(Math.random()* 300);
        this.width = 25;
        this.height = 50;
        this.element = document.createElement("img")

        this.element.src = "./coin.png"
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.right = `${this.right}px`;
        this.element.style.top = `${this.top}px`;

        this.beginGame.appendChild(this.element);
    }
updatePosition() {
    this.element.style.right = `${this.right}px`;
    this.element.style.top = `${this.top}px`;
}

move() {
    this.right += 6;

    this.updatePosition();
}

}