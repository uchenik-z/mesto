import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import { initialCards } from './cards.js';
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
const modalWindowPopup = document.querySelector('.popup');



const cardFormValidator = new FormValidator(config, popupFormCard);
const profileFormValidator = new FormValidator(config, popupFormProfile);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


function addCard(data) {
  const card = new Card (data, '.template-element', handlePhotoClick);
  const cardElement = card.generateCard();
  return cardElement;
}


const section = new Section({ items: initialCards,
  renderer: (item) => {
    const card = addCard(item);
    section.addItem(card);
  }
}, '.element');

section.renderItems();


const popupWithImage = new PopupWithImage('.popup_card_image');
popupWithImage.setEventListeners();
function handlePhotoClick({name, link}) {
  popupWithImage.open({name, link});
};


const cardForm = new PopupWithForm('.popup_place_card', {submitHandler: (data) => {
  const input = {name: data.title, link: data.link};
  const elementCard = addCard(input);
  section.addItem(elementCard);
  cardForm.close();
}});

cardForm.setEventListeners();

addButton.addEventListener('click', function() {
  cardForm.open();
  cardFormValidator.validationReset();
});


const userInfo = new UserInfo({name: '.profile__title', job: '.profile__subtitle'});


const profileForm = new PopupWithForm('.popup_place_profile', {submitHandler: (data) => {
  userInfo.setUserInfo({name: data.name, job: data.job});
  profileForm.close();
}});

profileForm.setEventListeners();

editButton.addEventListener('click', function() {
  profileForm.open();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  profileFormValidator.validationReset();
});