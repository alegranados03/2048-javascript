export default class Cell {
  #cellElement;
  #x;
  #y;
  #tile;
  constructor(cellElement, x, y) {
    this.#x = x;
    this.#y = y;
    this.#cellElement = cellElement;
  }

  get tile() {
    return this.#tile;
  }

  set tile(newTile) {}
}
