import "./index.css"; // add import of the main stylesheets file
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  validationSettings,
  initialCards,
  editProfileForm,
  addCardForm,
  cardListElement,
  editProfileModal,
  addCardModal,
  previewImageModal,
  editProfileButton,
  addCardButton,
  profileName,
  profileDescription,
  cardSelector,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

// Initial start-up

const cards = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cards.addItem(renderCard(cardData));
    },
  },
  ".content__list"
);

cards.renderItems();

// Validation

const editProfileFormValidator = new FormValidator(
  validationSettings,
  editProfileForm
);
const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addCardFormValidator.resetButtonState();

// Popup setup

const userInfo = new UserInfo(profileName, profileDescription);

const editProfileFormPopup = new PopupWithForm(
  editProfileModal,
  (inputValues) => {
    userInfo.setUserInfo(inputValues.name, inputValues.description);
  }
);

const addCardFormPopup = new PopupWithForm(addCardModal, (inputValues) => {
  const title = inputValues.title;
  const link = inputValues.link;
  cards.addItem(renderCard({ title, link }));
});

const previewImagePopup = new PopupWithImage(previewImageModal);

// Event Handlers

function handleEditProfileButton() {
  editProfileFormPopup.open();
  editProfileFormPopup.setInputValues(userInfo.getUserInfo());
  editProfileFormValidator.hideModalInputError();
  editProfileFormValidator.resetButtonState();
}

function handleAddCardButton() {
  addCardFormValidator.resetButtonState();
  addCardFormValidator.hideModalInputError();
  addCardFormPopup.open();
}

// Event Listeners

editProfileFormPopup.setEventListeners();
editProfileButton.addEventListener("click", handleEditProfileButton);
addCardFormPopup.setEventListeners();
addCardButton.addEventListener("click", handleAddCardButton);
previewImagePopup.setEventListeners();

// Functions

function renderCard(cardData) {
  const card = new Card(cardData, cardSelector, () => {
    previewImagePopup.open(cardData);
  });
  return card.getView();
}
