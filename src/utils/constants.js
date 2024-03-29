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

export const apiInfo = {
  apiToken: "911f3778-21cb-4f5c-ab83-db0550cf1beb",
  apiUrl: "https://around-api.en.tripleten-services.com/v1",
};

export const selectors = {
  avatarModalSelector: "#edit-avatar-modal",
  avatarFormSelector: "avatar-form",

  userAvatarSelector: ".profile__image",
  userNameSelector: ".profile__name",
  userDescriptionSelector: ".profile__description",

  imageModalSelector: "#preview-image-modal",

  cardListSelector: ".content__list",
  cardSelector: "#card-template",
  cardModalSelector: "#add-card-modal",
  cardFormSelector: "card-form",

  profileModalSelector: "#edit-profile-modal",
  profileFormSelector: "profile-form",

  confirmationModalSelector: "#delete-modal",
};

// Elements

export const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Forms
export const editProfileForm = document.querySelector("#edit-profile-form");
export const addCardForm = document.querySelector("#add-card-form");

// Wrappers
export const cardListElement = document.querySelector(".content__list");
export const editProfileModal = "#edit-profile-modal";
export const addCardModal = "#add-card-modal";
export const previewImageModal = "#preview-image-modal";

// Buttons
export const avatarButton = document.querySelector(".profile__avatar-button");
export const editProfileButton = document.querySelector("#edit-profile-button");
export const editProfileCloseButton = document.querySelector(
  "#close-profile-button"
);
export const addCardButton = document.querySelector("#add-card-button");
export const addCardSubmitButton = addCardForm.querySelector(
  "#create-card-button"
);
export const addCardCloseButton = document.querySelector(
  "#close-add-card-button"
);
export const previewImageCloseButton = document.querySelector(
  "#close-preview-button"
);

// other DOM nodes

export const avatarImage = document.querySelector(".profile__image");
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
