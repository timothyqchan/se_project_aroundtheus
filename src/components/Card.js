export default class Card {
  constructor({
    name,
    link,
    userId,
    _id,
    ownerId,
    isLiked,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick,
    cardSelector,
  }) {
    this._name = name;
    this._link = link;
    this._userId = userId;
    this._cardId = _id;
    this._ownerId = ownerId;
    this._isLiked = isLiked;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._cardSelector = cardSelector;
    // get the card view
    this._cardElement = this._getCardTemplate();
    this._cardImageElement = this._cardElement.querySelector(".card__image");
    this._cardTitleElement = this._cardElement.querySelector(".card__title");
    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");
    this._cardDeleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
  }

  _setEventListeners() {
    // like button
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });
    this._cardImageElement.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
    // delete button
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteClick(this));
  }

  _renderLikes() {
    if (this._isLiked) {
      this._cardLikeButton.classList.add("card__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_active");
    }
  }

  setLikes(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  deleteCard() {
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
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardTitleElement.textContent = this._name;
    // set event listeners
    this._setEventListeners();
    this._renderLikes();
    // return card
    return this._cardElement;
  }
}
