import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popup.querySelector('.popup__image');
    this._textPopup = this._popup.querySelector('.popup__text-image');
  }

  open({name, link}) {
    super.open();
    this._imagePopup.src = link;
    this._imagePopup.alt = name;
    this._textPopup.textContent = name;
  }

}