class Enemy {
    constructor(beginGame) {
        this.beginGame = beginGame;
        this.right = Math.floor(Math.random() * 300);
        this.top = 60;
        this.width = 100;
        this.height = 150;
        this.element = document.createElement("img")

        this.element.src = "./enemy1.png"
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