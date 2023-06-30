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

// Buttons
const editProfileButton = document.querySelector("#edit-profile-button");
const editProfileCloseButton = editProfileModal.querySelector(
  "#close-profile-button"
);
const addCardButton = document.querySelector("#add-card-button");
const addCardCloseButton = addCardModal.querySelector("#close-profile-button");
const cardDeleteButton = cardTemplate.querySelector("#card-delete-button");

// Other DOM nodes
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

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

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closeEditProfileModal() {
  closePopup(editProfileModal);
}

function openEditProfileModal() {
  fillProfileForm();
  openPopup(editProfileModal);
}
// edit
function closeAddCardModal() {
  closePopup(addCardModal);
}
//edit
function openAddCardModal() {
  openPopup(addCardModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardImageEl.setAttribute("src", cardData.link);
  cardImageEl.setAttribute("alt", cardData.name);
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

function resetCards() {
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardListEl.prepend(cardElement);
  });
}

// Event Handlers

function handleEditProfileSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeEditProfileModal();
}

// function handleAddCardSubmit(e) {
//   e.preventDefault();
//   closeAddCardModal();
// }

// Event Listeners

editProfileButton.addEventListener("click", openEditProfileModal);

editProfileCloseButton.addEventListener("click", closeEditProfileModal);

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

addCardButton.addEventListener("click", openAddCardModal);

addCardCloseButton.addEventListener("click", closeAddCardModal);

addCardForm.addEventListener("submit", handleAddCardSubmit);

// cardDeleteButton.addEventListener("click", deleteCard);

// Loops

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
