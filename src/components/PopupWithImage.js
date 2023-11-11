import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super({ selector });
    this._previewImage = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    this._previewCaption = this._popupElement.querySelector(".modal__caption");
  }

  open(data) {
    super.open();
    this._previewImage.src = data.link;
    this._previewImage.alt = data.title;
    this._previewCaption.textContent = data.title;
  }
}
