const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
];

// Elements
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Wrappers
const cardListEl = document.querySelector(".content__list");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = addCardModal.querySelector("#add-card-form");
const previewImageModal = document.querySelector("#preview-image-modal");

// Buttons
const editProfileButton = document.querySelector("#edit-profile-button");
const editProfileCloseButton = editProfileModal.querySelector(
  "#close-profile-button"
);
const addCardButton = document.querySelector("#add-card-button");
const addCardSubmitButton = addCardForm.querySelector("#create-card-button");
const addCardCloseButton = addCardModal.querySelector("#close-add-card-button");
const previewImageCloseButton = previewImageModal.querySelector(
  "#close-preview-button"
);

const cardDeleteButton = cardTemplate.querySelector(".card__delete-button");

// Other DOM nodes
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const previewImageCaption = document.querySelector("#preview-image-caption");
const previewImage = document.querySelector("#modal-preview-image");

// Form data
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const addCardTitleInput = document.querySelector("#card-title-input");
const addCardLinkInput = document.querySelector("#card-link-input");

// Functions

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
  document.removeEventListener("keydown", closeModalByEscape);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
  document.addEventListener("keydown", closeModalByEscape);
}

function closeEditProfileModal() {
  closeModal(editProfileModal);
}

function openEditProfileModal() {
  fillProfileForm();
  openModal(editProfileModal);
  enableButton(
    editProfileModal.querySelector(config.submitButtonSelector),
    config.inactiveButtonClass
  );
  hideAllInputErrors(editProfileModal, config);
}

function closeAddCardModal() {
  closeModal(addCardModal);
}

function openAddCardModal() {
  openModal(addCardModal);
}

function closePreviewImageModal() {
  closeModal(previewImageModal);
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function setImageAttributes(image, title, cardData) {
  image.setAttribute("src", cardData.link);
  image.setAttribute("alt", cardData.name);
  title.textContent = cardData.name;
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImageEl.addEventListener("click", () => {
    openModal(previewImageModal);
    setImageAttributes(previewImage, previewImageCaption, cardData);
  });
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });
  setImageAttributes(cardImageEl, cardTitleEl, cardData);
  return cardElement;
}

// Event Handlers

function handleEditProfileSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeEditProfileModal();
}

function handleAddCardSubmit(e) {
  e.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardLinkInput.value;
  renderCard({ name, link }, cardListEl);
  closeAddCardModal();
  addCardForm.reset();
  // turns create button back to disbabled after creating new card
  disableButton(addCardSubmitButton, "modal__button_disabled");
}

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

// Event Listeners

editProfileButton.addEventListener("click", openEditProfileModal);

editProfileCloseButton.addEventListener("click", closeEditProfileModal);

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

addCardButton.addEventListener("click", openAddCardModal);

addCardCloseButton.addEventListener("click", closeAddCardModal);

addCardForm.addEventListener("submit", (e) => {
  handleAddCardSubmit(e);
});

previewImageCloseButton.addEventListener("click", closePreviewImageModal);

// Loops

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});

// On start-up

disableButton(addCardSubmitButton, "modal__button_disabled");
