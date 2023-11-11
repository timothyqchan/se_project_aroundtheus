export default class UserInfo {
  constructor(name, description, avatar) {
    this._nameElement = name;
    this._descriptionElement = description;
    this._avatarElement = avatar;
  }

  getUserInfo() {
    // returns an object with info on the user
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
    };
  }

  setUserInfo(name, description) {
    // takes new user info and adds it to the page
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = description;
  }

  setAvatar(avatar) {
    this._avatarElement.src = avatar;
    this._avatarElement.alt = this._nameElement.textContent;
  }
}
