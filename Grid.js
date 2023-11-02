import Cell from "./Cell.js";
const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;
const CELL_BORDER_RADIUS = 1;

export default class Grid {
  cellObjects;
  constructor(gridElement) {
    this.gridElement = gridElement;
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    gridElement.style.setProperty(
      "--cell-border-radius",
      `${CELL_BORDER_RADIUS}vmin`
    );
  }

  get #emptyCells() {
    return this.cellObjects.filter((cell) => cell.tile == null);
  }

  randomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
    return this.#emptyCells[randomIndex];
  }

  createBoardCells() {
    const cell_qty = GRID_SIZE ** 2;
    const cells = [];
    for (let i = 0; i < cell_qty; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cells.push(cell);
      this.gridElement.append(cell);
    }
    this.cellObjects = cells.map(
      (cell, index) =>
        new Cell(cell, index % GRID_SIZE, Math.floor(index / GRID_SIZE))
    );
  }
}
