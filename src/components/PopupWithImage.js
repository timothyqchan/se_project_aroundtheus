import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super({ selector });
    this._previewImage = this._popup.querySelector(".modal__preview-image");
    this._previewCaption = this._popup.querySelector(".modal__caption");
  }

  open({ link, name }) {
    this._previewImage.src = link;
    this._previewImage.alt = name;
    this._previewCaption.textContent = name;
    super.open();
  }
}
