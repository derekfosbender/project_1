class Enemy {
    constructor(beginGame) {
        this.beginGame = beginGame;
        this.right = 60;
        this.top = Math.floor(Math.random()* 300);
        this.width = 50;
        this.height = 100;
        this.element = document.createElement("img")

        this.element.src = "./enemy1.png"
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.right = `${this.right}px`;
        this.element.style.top = `${this.top}px`;

        this.beginGame.appendChild(this.element); //
    }
updatePosition() {
    this.element.style.right = `${this.right}px`;
    this.element.style.top = `${this.top}px`;
}

move() {
    this.right += 6; //speed 

    this.updatePosition();
}

}