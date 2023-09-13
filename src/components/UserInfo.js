export default class UserInfo {
  constructor(name, description) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    // returns an object with info on the user
    return {
      name: this._name.textContent,
      description: this._description.textContent,
    };
  }

  setUserInfo(name, description) {
    // takes new user info and adds it to the page
    this._name.textContent = name;
    this._job.textContent = description;
  }
}
