export const validationSettings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const initialCards = [
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
  {
    title: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    title: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    title: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    title: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
];

// Elements
export const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Forms
export const editProfileForm = document.querySelector("#edit-profile-form");
export const addCardForm = document.querySelector("#add-card-form");

// Wrappers
export const cardListElement = document.querySelector(".content__list");
export const editProfileModal = document.querySelector("#edit-profile-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const previewImageModal = document.querySelector("#preview-image-modal");

// Buttons
export const editProfileButton = document.querySelector("#edit-profile-button");
export const editProfileCloseButton = editProfileModal.querySelector(
  "#close-profile-button"
);
export const addCardButton = document.querySelector("#add-card-button");
export const addCardSubmitButton = addCardForm.querySelector(
  "#create-card-button"
);
export const addCardCloseButton = addCardModal.querySelector(
  "#close-add-card-button"
);
export const previewImageCloseButton = previewImageModal.querySelector(
  "#close-preview-button"
);

// other DOM nodes

export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const previewImageCaption = document.querySelector(
  "#preview-image-caption"
);
export const previewImage = document.querySelector("#modal-preview-image");

// Form data
export const profileNameInput = document.querySelector("#profile-name-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const addCardTitleInput = document.querySelector("#card-title-input");
export const addCardLinkInput = document.querySelector("#card-link-input");

export const cardSelector = "#card-template";
