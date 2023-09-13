import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector, data) {
    super({ selector });
    this._popupImage = selector;
    this._data = data;
  }

  open() {
    super.open();
    const previewImage = this._popupImage.querySelector(
      ".modal__preview-image"
    );
    previewImage.src = this._data.link;
    previewImage.alt = this._data.title;
    const previewCaption = this._popupImage.querySelector(".modal__caption");
    previewCaption.textContent = this._data.title;
  }

  close() {
    super.close();
  }
}
