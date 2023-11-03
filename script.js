import Grid from "./Grid.js";
import Tile from "./Tile.js";

const gameBoard = document.querySelector("#game-board");
const grid = new Grid(gameBoard);
grid.createBoardCells();
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput();

async function handleInput(e) {
  switch (e.key) {
    case "ArrowUp":
      if (!canMoveUp()) {
        setupInput();
        return;
      }
      await moveUp();
      break;
    case "ArrowDown":
      if (!canMoveDown()) {
        setupInput();
        return;
      }
      await moveDown();
      break;
    case "ArrowLeft":
      if (!canMoveLeft()) {
        setupInput();
        return;
      }
      await moveLeft();
      break;
    case "ArrowRight":
      if (!canMoveRight()) {
        setupInput();
        return;
      }
      await moveRight();
      break;
    default:
      await setupInput();
      return;
  }

  grid.cells.forEach((cell) => cell.mergeTiles());
  const newRandomCell = grid.randomEmptyCell();
  if (newRandomCell) {
    newRandomCell.tile = new Tile(gameBoard);
  } else {
    alert("You Lost");
  }
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

function canMove(cells) {
  return cells.some((group) => {
    return group.some((cell, index) => {
      if (index === 0) return false;
      if (cell.tile == null) return false;
      const moveToCell = group[index - 1];
      return moveToCell.canAccept(cell.tile);
    });
  });
}
function canMoveUp() {
  return canMove(grid.gridCellsByColumns);
}
function canMoveDown() {
  return canMove(
    grid.gridCellsByColumns.map((column) => [...column].reverse())
  );
}
function canMoveLeft() {
  return canMove(grid.gridCellsByRows);
}
function canMoveRight() {
  return canMove(grid.gridCellsByRows.map((column) => [...column].reverse()));
}

function slideTiles(cells) {
  return Promise.all(
    cells.flatMap((group) => {
      const promises = [];
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
          promises.push(cell.tile.waitForTransition());
          if (lastValidCell.tile != null) {
            lastValidCell.mergeTile = cell.tile;
          } else {
            lastValidCell.tile = cell.tile;
          }
          cell.tile = null;
        }
      }
      return promises;
    })
  );
}
