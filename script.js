import Grid from "./Grid.js";

const gameBoard = document.querySelector("#game-board");
const grid = new Grid(gameBoard);
grid.createBoardCells();

grid.randomEmptyCell.tile = new Tile(gameBoard);

