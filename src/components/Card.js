export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.title;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick.bind(this)
    );
  }

  _handleLikeButton() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
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
    this._cardImageElement.alt = this._title;
    this._cardTitleElement.textContent = this._title;
    // set event listeners
    this._setEventListeners();
    // return card
    return this._cardElement;
  }
}
