export default class UserInfo {
  constructor(nameSelector, descriptionSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    // returns an object with info on the user
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo({ name, description }) {
    // takes new user info and adds it to the page
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = description;
  }

  setAvatar(avatar) {
    this._avatarElement.src = avatar;
    this._avatarElement.alt = this._nameElement.textContent;
  }
}
