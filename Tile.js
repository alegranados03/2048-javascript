export default class Tile {
  #tileElement;
  #x;
  #y;
  #value;
  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.value = value;
  }

  remove() {
    this.#tileElement.remove();
  }

  set x(value) {
    this.#x = value;
    this.#tileElement.style.setProperty("--x", this.#x);
  }

  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty("--y", this.#y);
  }

  get value() {
    return this.#value;
  }

  set value(val) {
    this.#value = val;
    this.#tileElement.textContent = val;
    const power = Math.log2(val);
    const backgroundLightness = 100 - power * 9;
    this.#tileElement.style.setProperty(
      "--background-lightness",
      `${backgroundLightness}%`
    );

    this.#tileElement.style.setProperty(
      "--text-lightness",
      `${backgroundLightness <= 50 ? 90 : 10}%`
    );
  }

  waitForTransition() {
    return new Promise((resolve) => {
      this.#tileElement.addEventListener("transitionend", resolve, {
        once: true,
      });
    });
  }
}
