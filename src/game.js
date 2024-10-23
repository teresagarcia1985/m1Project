class Game {
  constructor() {
    this.StartScreen = document.querySelector("#game-intro");
    this.GameScreen = document.querySelector("#game-screen");
    this.GameOverScreen = document.querySelector("#game-over");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(200, 250, 225, 400, "images/Peter.png");
    this.height = 600;
    this.width = 1000;
    this.obstacles = [new Obstacle()];
    this.coffee = [new Obstacle()];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.counter = 0;
  }
  start() {
    this.GameScreen.style.height = `${this.height}px`;
    this.GameScreen.style.width = `${this.width}px`;
    this.StartScreen.style.display = "none";
    this.GameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    //console.log("game loop");
    this.update();
    //this checks when the game is over and if true then stops the game
    if (this.gameIsOver === true) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    this.counter++;
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();
      const didReceiveDoc = this.player.didReceiveDoc(currentObstacle);
      //console.log("Document Recived", didReceiveDoc);
      if (didReceiveDoc) {
        this.obstacles.splice(i, 1);
        currentObstacle.element.remove();
        this.lives--;
        this.livesElement.innerText = this.lives;
      }

      //this checks the top of the obstacle and if it is greater than the height of the game screen ...
      //then it increases the score and removes that obstacle
      //first increment the score
      if (currentObstacle.top > this.height + 100) {
        this.score++;
        //remove the obstacle from the array
        this.obstacles.splice(i, 1);
        //update the DOM to reflect the new score
        this.scoreElement.innerText = this.score;
        currentObstacle.element.remove();
        i--;
      }
    }
    for (let i = 0; i < this.coffee.length; i++) {
      const currentObstacle = this.coffee[i];
      currentObstacle.move();
      const coffeeIntake = this.player.coffeeIntake(currentObstacle);

      if (coffeeIntake) {
        this.coffee.splice(i, 1);
        currentObstacle.element.remove();
        this.lives++;
        this.livesElement.innerText = this.lives;
      }

      //this checks the top of the obstacle and if it is greater than the height of the game screen ...
      //then it increases the score and removes that obstacle
      //first increment the score
      if (currentObstacle.top > this.height + 100) {
        this.score++;
        //remove the obstacle from the array
        this.obstacles.splice(i, 1);
        //update the DOM to reflect the new score
        this.scoreElement.innerText = this.score;
        currentObstacle.element.remove();
        i--;
      }
    }
    if (this.lives === 0) {
      console.log("Game over, do some work");
      this.gameIsOver = true;
      this.player.element.remove();
      this.obstacles.forEach((oneObstacle) => {
        oneObstacle.element.remove();
      });
      //hide the game screen and show the game over screen
      this.GameScreen.style.display = "none";
      this.GameOverScreen.style.display = "block";
    }
    //this adds a new obstacle to the array every so many frames
    if (this.counter % 60 === 0) {
      this.obstacles.push(new Obstacle());
    }
  }
}
