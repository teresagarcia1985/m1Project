class Coffee {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");

    this.left = Math.floor(Math.random() * 1000);
    this.top = -200;
    this.width = 70;
    this.height = 130;

    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = "images/coffee.png";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top += 5;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
  ß;
}
