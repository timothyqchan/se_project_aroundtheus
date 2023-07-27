import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { validationSettings } from "../utils/validationSettings.js";
import { openModal, closeModal } from "../utils/utils.js";

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

// Forms
const editProfileForm = document.querySelector("#edit-profile-form");
const addCardForm = document.querySelector("#add-card-form");

// Wrappers
const cardListElement = document.querySelector(".content__list");
const editProfileModal = document.querySelector("#edit-profile-modal");
const addCardModal = document.querySelector("#add-card-modal");
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

// other DOM nodes

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

const cardSelector = "#card-template";

// Functions

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function renderCard(cardData) {
  const card = new Card(cardData, cardSelector);
  const cardElement = card.getView();
  cardListElement.prepend(cardElement);
}

// function setImageAttributes(image, title, cardData) {
//   image.setAttribute("src", cardData.link);
//   image.setAttribute("alt", cardData.name);
//   title.textContent = cardData.name;
// }

// function getCardElement(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageEl = cardElement.querySelector(".card__image");
//   const cardTitleEl = cardElement.querySelector(".card__title");
//   const cardLikeButton = cardElement.querySelector(".card__like-button");
//   const cardDeleteButton = cardElement.querySelector(".card__delete-button");
//   cardDeleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });
//   cardImageEl.addEventListener("click", () => {
//     openModal(previewImageModal);
//     setImageAttributes(previewImage, previewImageCaption, cardData);
//   });
//   cardLikeButton.addEventListener("click", () => {
//     cardLikeButton.classList.toggle("card__like-button_active");
//   });
//   setImageAttributes(cardImageEl, cardTitleEl, cardData);
//   return cardElement;
// }

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
  renderCard({ name, link }, cardListElement);
  closeAddCardModal();
  addCardForm.reset();
  // turns create button back to disbabled after creating new card
  addCardFormValidator.resetButtonState();
}

function handleOpenEditProfileModal() {
  fillProfileForm();
  openModal(editProfileModal);
  editProfileFormValidator.resetButtonState();
  const inputElements = [...editProfileForm.querySelectorAll(".modal__input")];
  inputElements.forEach((inputElement) => {
    inputElement.classList.remove("modal__input_type_error");
    editProfileForm
      .querySelector(`#${inputElement.id}-error`)
      .classList.remove("modal__error_visible");
  });
}

function closeEditProfileModal() {
  closeModal(editProfileModal);
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

// Event Listeners

editProfileButton.addEventListener("click", handleOpenEditProfileModal);

editProfileCloseButton.addEventListener("click", closeEditProfileModal);

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

addCardButton.addEventListener("click", openAddCardModal);

addCardCloseButton.addEventListener("click", closeAddCardModal);

addCardForm.addEventListener("submit", (e) => {
  handleAddCardSubmit(e);
});

previewImageCloseButton.addEventListener("click", closePreviewImageModal);

// Initial start-up

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListElement);
});

const editProfileFormValidator = new FormValidator(
  validationSettings,
  editProfileForm
);
const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addCardFormValidator.resetButtonState();
