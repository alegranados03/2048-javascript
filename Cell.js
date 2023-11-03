export default class Cell {
  #cellElement;
  #x;
  #y;
  #tile;
  #mergeTile;

  constructor(cellElement, x, y) {
    this.#x = x;
    this.#y = y;
    this.#cellElement = cellElement;
  }

  get tile() {
    return this.#tile;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  set tile(newTile) {
    this.#tile = newTile;
    if (newTile == null) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
  }

  set mergeTile(value) {
    this.#mergeTile = value;
    if (value == null) return;
    this.#mergeTile.x = this.#x;
    this.mergeTile.y = this.#y;
  }

  get mergeTile() {
    return this.#mergeTile;
  }

  mergeTiles() {
    if (this.mergeTile == null || this.tile == null) return;
    this.tile.value =
      parseInt(this.mergeTile.value) + parseInt(this.tile.value);
    this.mergeTile.remove();
    this.mergeTile = null;
  }

  canAccept(tile) {
    return (
      this.tile == null ||
      (this.mergeTile == null && this.tile.value === tile.value)
    );
  }
}
