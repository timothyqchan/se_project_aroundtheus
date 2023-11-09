import "./index.css"; // add import of the main stylesheets file
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  avatarButton,
  validationSettings,
  profileNameInput,
  profileDescriptionInput,
  addCardButton,
  editProfileButton,
  selectors,
  apiInfo,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

// Message to Tripleten reviewer: I'm so sorry for the terrible code.
// I have really been struggling with this project and I dont know what I'm doing wrong
// I keep getting an error in Popup.js, but I don't know whats wrong with it
// Thank you for your patience

// Initial start-up
const { apiToken, apiUrl } = apiInfo;

let userId = null;
let section = null;

const api = new Api({
  baseUrl: apiUrl,
  headers: {
    authorization: apiToken,
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userJobSelector,
  selectors.userAvatarSelector
);

const handleDeleteClick = (card) => {
  confirmationModal.setSubmitAction(() => {
    confirmationModal.setButtonText(true);
    api
      .deleteCard(card._cardId)
      .then(() => {
        card.deleteCard();
        confirmationModal.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => confirmationModal.setButtonText(false));
  });
  confirmationModal.open();
};

const handleLikeClick = (card) => {
  if (card._isLiked) {
    api
      .removeCardLike(card._cardId)
      .then(() => {
        card.setLikes(false);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api
      .addCardLike(card._cardId)
      .then(() => {
        card.setLikes(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

const confirmationModal = new PopupWithConfirmation(
  selectors.confirmationModalSelector
);
confirmationModal.setEventListeners();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userInfo.setUserInfo({
      name: data.name,
      job: data.about,
    });

    userInfo.setAvatar(data.avatar);

    section = new Section(
      {
        items: cards,
        renderer: (cardData) => {
          section.addItem(renderCard(cardData, userId));
        },
      },
      selectors.cardListSelector
    );
    section.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });

const formValidators = {};

const enableValidation = (validationSettings) => {
  const formList = Array.from(
    document.querySelectorAll(validationSettings.formSelector)
  );
  formList.forEach((formElem) => {
    const validator = new FormValidator(validationSettings, formElem);
    const formName = formElem.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationSettings);

editProfileButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();

  profileNameInput.value = info.name;
  profileDescriptionInput.value = info.job;

  profileModal.open();
  formValidators["profile-form"].resetValidation();
});

const renderCard = ({ name, link, _id, ownerId, isLiked }, userId) => {
  const card = new Card({
    name,
    link,
    userId,
    _id,
    ownerId,
    isLiked,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick,
    cardSelector: selectors.cardSelector,
  });
  return card.getView();
};

const handleImageClick = ({ name, link }) => {
  imageModal.open({ name, link });
};

const avatarModal = new PopupWithForm(
  selectors.avatarModalSelector,
  (avatarData) => {
    avatarModal.setButtonText(true);
    api
      .editProfilePhoto(avatarData)
      .then((data) => {
        userInfo.setAvatar(data.avatar);
        avatarModal.close();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => avatarModal.setButtonText());
  }
);
avatarModal.setEventListeners();

const imageModal = new PopupWithImage(selectors.imageModalSelector);
imageModal.setEventListeners();

const cardModal = new PopupWithForm(selectors.cardModalSelector, (cardData) => {
  cardModal.setButtonText(true);
  api
    .createCard(cardData)
    .then((data) => {
      section.addItem(renderCard(data, userId));
      cardModal.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => cardModal.setButtonText(false));
});
cardModal.setEventListeners();

const profileModal = new PopupWithForm(
  selectors.profileModalSelector,
  (profileData) => {
    profileModal.setButtonText(true);
    api
      .editUserInfo(profileData)
      .then((profileData) => {
        userInfo.setUserInfo({
          name: profileData.name,
          job: profileData.about,
        });
        profileModal.close();
      })
      .then(() => {
        console.log(userInfo.getUserInfo());
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => profileModal.setButtonText(false));
  }
);
profileModal.setEventListeners();

avatarButton.addEventListener("click", () => {
  avatarModal.open();
  formValidators[selectors.avatarFormSelector].resetValidation();
});

addCardButton.addEventListener("click", () => {
  cardModal.open();
  formValidators[selectors.cardFormSelector].resetValidation();
});