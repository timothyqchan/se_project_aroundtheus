import "./index.css"; // add import of the main stylesheets file
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  validationSettings,
  initialCards,
  cardTemplate,
  editProfileForm,
  addCardForm,
  cardListElement,
  editProfileModal,
  addCardModal,
  previewImageModal,
  editProfileButton,
  editProfileCloseButton,
  addCardButton,
  addCardSubmitButton,
  addCardCloseButton,
  previewImageCloseButton,
  profileName,
  profileDescription,
  previewImageCaption,
  previewImage,
  profileNameInput,
  profileDescriptionInput,
  addCardTitleInput,
  addCardLinkInput,
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
      const card = new Card(cardData, cardSelector, () => {
        const previewImagePopup = new PopupWithImage(
          previewImageModal,
          cardData
        );
        previewImagePopup.open();
      });
      const cardElement = card.getView();
      cards.addItem(cardElement);
    },
  },
  cardListElement
);

cards.renderItems();

// Functions

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function renderCard(cardData) {
  const card = new Card(cardData, cardSelector, () => {
    const previewImagePopup = new PopupWithImage(previewImageModal, cardData);
    previewImagePopup.open();
  });
  const cardElement = card.getView();
  cardListElement.prepend(cardElement);
}

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

const editProfileFormPopup = new PopupWithForm(
  editProfileModal,
  (inputValues) => {
    profileName.textContent = inputValues.name;
    profileDescription.textContent = inputValues.description;
  }
);

editProfileButton.addEventListener("click", () => {
  editProfileFormPopup.open();
  fillProfileForm();
  editProfileFormValidator.resetButtonState();
  const inputElements = [...editProfileForm.querySelectorAll(".modal__input")];
  editProfileFormValidator.hideModalInputError(inputElements);
});

const addCardFormPopup = new PopupWithForm(addCardModal, (inputValues) => {
  const title = inputValues.title;
  const link = inputValues.link;
  renderCard({ title, link });
  addCardForm.reset();
  // turns create button back to disbabled after creating new card
  addCardFormValidator.resetButtonState();
});

addCardButton.addEventListener("click", () => {
  addCardFormPopup.open();
});
