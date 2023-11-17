export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this.renderer = renderer;
    this._selector = document.querySelector(selector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element) {
    // adds to the DOM
    this._selector.prepend(element);
  }
}
