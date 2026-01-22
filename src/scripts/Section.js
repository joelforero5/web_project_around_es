class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items,newCard) {
    items.forEach((item) => {
      this._renderer(item,newCard);
    });
  }

  addItem(element, newCard) {
    if (newCard) {
      this._container.prepend(element);
      return;
    }
    this._container.append(element);
  }
}

export default Section;