export default class UserInfo {
  constructor({name, job}) {
    this._userName = document.querySelector(name);
    this._userJob = document.querySelector(job);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
  }

  setUserInfo({name, job}) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }

}