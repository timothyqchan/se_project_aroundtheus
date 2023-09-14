import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super({ selector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    // Create an empty object
    this._formValues = {};
    // Add the values of the fields to this object
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    // Return the values object
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    // add submit event handler to the form
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
