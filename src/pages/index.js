import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  initialCards,
  buttonEditProfile,
  profileModalWindow,
  popupFormProfile,
  nameInput,
  jobInput,
  buttonAddCard,
  cardModalWindow,
  popupFormCard
} from '../utils/constants.js';
import { config } from '../utils/utils.js';
import './index.css';



const cardFormValidator = new FormValidator(config, popupFormCard);
const profileFormValidator = new FormValidator(config, popupFormProfile);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


function addCard(data) {
  const card = new Card (data, '.template-element', handlePhotoClick);
  return card.generateCard();
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
function handlePhotoClick(cardData) {
  popupWithImage.open(cardData);
};


const cardForm = new PopupWithForm('.popup_place_card', {submitHandler: (data) => {

  const elementCard = addCard(data);
  section.addItem(elementCard);
  cardForm.close();
}});

cardForm.setEventListeners();

buttonAddCard.addEventListener('click', function() {
  cardForm.open();
  cardFormValidator.validationReset();
});


const userInfo = new UserInfo({name: '.profile__title', job: '.profile__subtitle'});


const profileForm = new PopupWithForm('.popup_place_profile', {submitHandler: (data) => {
  userInfo.setUserInfo(data);
  profileForm.close();
}});

profileForm.setEventListeners();

buttonEditProfile.addEventListener('click', function() {
  profileForm.open();
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  profileFormValidator.validationReset();
});