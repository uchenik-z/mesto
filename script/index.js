import { Card } from './Card.js';
import { initialCards } from './cards.js';
import { FormValidator } from './FormValidator.js';
import { config } from './utils.js';


const editButton = document.querySelector('.profile__edit-button');
const modalWindowProfile = document.querySelector('.popup_place_profile');
const closeButtonProfile = modalWindowProfile.querySelector('.popup__close');
const popupFormProfile = modalWindowProfile.querySelector('.popup__form');
const nameInput = popupFormProfile.querySelector('.popup__input_type_name');
const jobInput = popupFormProfile.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const saveButtonProfile = modalWindowProfile.querySelector('.popup__button_type_profile');

const addButton = document.querySelector('.profile__add-button');
const modalWindowCard = document.querySelector('.popup_place_card');
const closeButtonCard = modalWindowCard.querySelector('.popup__close');
const popupFormCard = modalWindowCard.querySelector('.popup__form');
const titleInput = popupFormCard.querySelector('.popup__input_type_title');
const linkInput = popupFormCard.querySelector('.popup__input_type_link');
const saveButtonCard = modalWindowCard.querySelector('.popup__button_type_card');

const modalWindowImage = document.querySelector('.popup_card_image');
const closeButtonImage = modalWindowImage.querySelector('.popup__close');
const imagePopup = modalWindowImage.querySelector('.popup__image');
const textImage = modalWindowImage.querySelector('.popup__text-image');

const elementList = document.querySelector('.element');
const templateElement = document.querySelector('.template-element');


const cardFormValidator = new FormValidator(config, popupFormCard);
const profileFormValidator = new FormValidator(config, popupFormProfile);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClosePopup);
  document.addEventListener('click', overlayPopupClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClosePopup);
  document.removeEventListener('click', overlayPopupClose);
}

function escClosePopup (event) {
  if (event.key === "Escape") {
    const closePopupEsc = document.querySelector('.popup_opened');
    closePopup(closePopupEsc);
  }
}

function overlayPopupClose(evt) {
  const modalWindow = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(modalWindow);
  }
}

function profileInput() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  profileFormValidator.validationReset();
}

editButton.addEventListener('click', function() {
  openPopup(modalWindowProfile);
  profileInput();
});

addButton.addEventListener('click', function() {
  openPopup(modalWindowCard);
});

closeButtonProfile.addEventListener('click', function() {
  closePopup(modalWindowProfile);
});

closeButtonCard.addEventListener('click', function() {
  closePopup(modalWindowCard);
});

closeButtonImage.addEventListener('click', function() {
  closePopup(modalWindowImage);
});

function onSubmitProfile(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(modalWindowProfile);
}

popupFormProfile.addEventListener('submit', onSubmitProfile);


function addCard(data) {
  const card = new Card (data, '.template-element', handlePhotoClick);
  const cardElement = card.generateCard();

  return cardElement;
}

function onSubmitCard(evt) {
  evt.preventDefault();
  elementList.prepend(addCard({name: titleInput.value, link: linkInput.value}, '.template-element', handlePhotoClick));
  popupFormCard.reset();
  cardFormValidator.validationReset();
  closePopup(modalWindowCard);
};

popupFormCard.addEventListener('submit', onSubmitCard);


initialCards.forEach((data) => {
  elementList.append(addCard(data, '.template-element', handlePhotoClick));
});

function handlePhotoClick(item) {
  imagePopup.src = item.link;
  imagePopup.alt = item.name;
  textImage.textContent = item.name;
  openPopup(modalWindowImage);
};