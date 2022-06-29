export default class Card {
  constructor(data, cardSelector, handleOpenImage) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleOpenImage = handleOpenImage;
  }

  _createCard() {
    return document.querySelector(this._cardSelector).content.querySelector('.element__list').cloneNode(true);
  }

  generateCard() {
    this._element = this._createCard();
    this._setEventListeners();

    this._image = this._element.querySelector('.element__image');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  _toggleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handlePhotoClick() {
    this._handleOpenImage({link: this._link, name: this._name});
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._removeCard();
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._toggleLike();
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handlePhotoClick();
    });
  }

}