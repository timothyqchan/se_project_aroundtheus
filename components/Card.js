import { openModal } from "../utils/utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener(
      "click",
      this._handleLikeButton.bind(this)
    );
    this._cardDeleteButton.addEventListener(
      "click",
      this._handleDeleteButton.bind(this)
    );
    this._cardImageElement.addEventListener(
      "click",
      this._handleImageModal.bind(this)
    );
  }

  _handleLikeButton() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  // Find out how to do this better in index.js
  _handleImageModal() {
    const previewImage = document.querySelector("#modal-preview-image");
    previewImage.src = this._link;
    previewImage.alt = this._name;
    const previewCaption = document.querySelector("#preview-image-caption");
    previewCaption.textContent = this._name;
    openModal(document.querySelector("#preview-image-modal"));
  }

  _getCardTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    // get the card view
    this._cardElement = this._getCardTemplate();

    this._cardImageElement = this._cardElement.querySelector(".card__image");
    this._cardTitleElement = this._cardElement.querySelector(".card__title");
    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");
    this._cardDeleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardTitleElement.textContent = this._name;
    // set event listeners
    this._setEventListeners();
    // return card
    return this._cardElement;
  }
}
