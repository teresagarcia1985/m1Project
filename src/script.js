window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let ourGame;

  startButton.addEventListener("click", function () {
    startGame();
  });
  document.addEventListener("keydown", (event) => {
    console.log("key pressed", event.code);
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 1;
    }
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -1;
    }
  });
  document.addEventListener("keyup", () => {
    ourGame.player.directionX = 0;
  });
  function startGame() {
    console.log("start game");
    const ourGame = new Game();
    ourGame.start();
  }
};
