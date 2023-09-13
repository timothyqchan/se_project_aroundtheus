import {
  openModal,
  closeModal,
  closeModalOnRemoteClick,
  closeModalByEscape,
} from "../utils/utils.js";

export default class Popup {
  constructor({ selector }) {
    this._popupElement = selector;
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    this._popupElement.addEventListener("mousedown", closeModalOnRemoteClick);
    document.addEventListener("keydown", closeModalByEscape);
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    this._popupElement.removeEventListener(
      "mousedown",
      closeModalOnRemoteClick
    );
    document.removeEventListener("keydown", closeModalByEscape);
  }

  _handleEscClose(evt) {
    // listens for esc button
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton = this._popupElement.querySelector(".modal__close");
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
  }

  getPopupElement() {
    return this._popupElement;
  }
}
