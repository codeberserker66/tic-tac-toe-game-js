let isGameOver = false;
let currentPlayer = "X";
const grid = Array(9).fill("");
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".grid-item");
const message = document.querySelector(".message");

message.innerHTML = `${currentPlayer} turn`;

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick() {
  const index = Array.from(cells).indexOf(this);

  if (!isGameOver && grid[index] === "") {
    grid[index] = currentPlayer;
    this.innerHTML = currentPlayer;

    if (checkWinner()) {
      message.innerHTML = `${currentPlayer} won the game`;
      isGameOver = true;
    } else if (grid.indexOf("") === -1) {
      message.innerHTML = "It's a draw";
      isGameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      message.innerHTML = `${currentPlayer} turn`;
    }
  }
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (grid[a] !== "" && grid[a] === grid[b] && grid[b] === grid[c]) {
      return true;
    }
  }

  return false;
}
