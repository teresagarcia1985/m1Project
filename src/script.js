window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let ourGame;

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
  document.addEventListener("keydown", (event) => {
    console.log("key pressed", ourGame);
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 5;
    }
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -5;
    }
  });
  document.addEventListener("keyup", () => {
    ourGame.player.directionX = 0;
  });
  function startGame() {
    ourGame = new Game();
    console.log("start game", ourGame);
    ourGame.start();
  }
};
