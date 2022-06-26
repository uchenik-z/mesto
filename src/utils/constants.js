export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const editButton = document.querySelector('.profile__edit-button');
export const modalWindowProfile = document.querySelector('.popup_place_profile');
export const popupFormProfile = modalWindowProfile.querySelector('.popup__form');
export const nameInput = popupFormProfile.querySelector('.popup__input_type_name');
export const jobInput = popupFormProfile.querySelector('.popup__input_type_job');

export const addButton = document.querySelector('.profile__add-button');
export const modalWindowCard = document.querySelector('.popup_place_card');
export const popupFormCard = modalWindowCard.querySelector('.popup__form');