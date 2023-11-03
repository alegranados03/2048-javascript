import Grid from "./Grid.js";
import Tile from "./Tile.js";

const gameBoard = document.querySelector("#game-board");
const grid = new Grid(gameBoard);
grid.createBoardCells();
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput();

function handleInput(e) {
  switch (e.key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      setupInput();
      return;
  }

  grid.cells.forEach((cell) => cell.mergeTiles());
  grid.randomEmptyCell().tile = new Tile(gameBoard);
  setupInput();
}

function setupInput() {
  window.addEventListener("keydown", handleInput, { once: true });
}

function moveUp() {
  slideTiles(grid.gridCellsByColumns);
}
function moveDown() {
  slideTiles(grid.gridCellsByColumns.map((column) => [...column].reverse()));
}
function moveLeft() {
  slideTiles(grid.gridCellsByRows);
}
function moveRight() {
  slideTiles(grid.gridCellsByRows.map((column) => [...column].reverse()));
}

function slideTiles(cells) {
  cells.forEach((group) => {
    for (let columnIndex = 1; columnIndex < group.length; columnIndex++) {
      const cell = group[columnIndex];
      if (cell.tile == null) continue;
      let lastValidCell;
      for (let j = columnIndex - 1; j >= 0; j--) {
        const moveToCell = group[j];
        if (!moveToCell.canAccept(cell.tile)) break;
        lastValidCell = moveToCell;
      }

      if (lastValidCell != null) {
        if (lastValidCell.tile != null) {
          lastValidCell.mergeTile = cell.tile;
        } else {
          lastValidCell.tile = cell.tile;
        }
        cell.tile = null;
      }
    }
  });
}
