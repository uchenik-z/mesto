import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { initialCards, editButton, modalWindowProfile, popupFormProfile, nameInput, jobInput, addButton, modalWindowCard, popupFormCard } from '../utils/constants.js';
import { config } from '../utils/utils.js';
import './index.css';



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