class Player {
  constructor(left, top, width, height, playerImage) {
    this.gameScreen = document.querySelector("#game-screen");
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = -1;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = playerImage;
    this.element.style.height = `${height}px`;
    this.element.style.width = `${width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    if (this.left > 0 && this.left + this.width < 300) {
      this.left += this.directionX;
    }

    // if (this.top > 10 && this.top + this.height < 440) {
    //   this.top += this.directionY;
    // }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
  didReceiveDoc(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
