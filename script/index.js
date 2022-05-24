import {Card} from './Card.js';
import {initialCards} from './cards.js';
import {showInputError, hideInputError, isValid, setEventListeners, enableValidation, hasInvalidInput, toggleButtonState} from './FormValidator.js';


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

const elementList = document.querySelector('.element');
const templateElement = document.querySelector('.template-element');


const imagePopup = modalWindowImage.querySelector('.popup__image');
const textImage = modalWindowImage.querySelector('.popup__text-image');


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


function onSubmitCard(evt) {
  evt.preventDefault();
  const card = new Card ({name: titleInput.value, link: linkInput.value}, '.template-element', handlePhotoClick);
  const cardElement = card.generateCard();
  elementList.prepend(cardElement);
  popupFormCard.reset();
  closePopup(modalWindowCard);
  saveButtonCard.classList.add('popup__button_disabled');
  saveButtonCard.setAttribute('disabled', true);
};

popupFormCard.addEventListener('submit', onSubmitCard);


initialCards.forEach((data) => {
  const card = new Card(data, '.template-element', handlePhotoClick);
  const cardElement = card.generateCard();

  document.querySelector('.element').append(cardElement);
});

function handlePhotoClick(item) {
  imagePopup.src = item.link;
  imagePopup.alt = item.name;
  textImage.textContent = item.name;
  openPopup(modalWindowImage);
};



// function onSubmitCard(event) {
//   event.preventDefault();
//   const titleInput = popupFormCard.querySelector('.popup__input_type_title').value;
//   const linkInput = popupFormCard.querySelector('.popup__input_type_link').value;
//   const element = createCard({name: titleInput, link: linkInput});
//   elementList.prepend(element);
//   closePopup(modalWindowCard);
//   popupFormCard.reset();
//   saveButtonCard.classList.add('popup__button_disabled');
//   saveButtonCard.setAttribute('disabled', true);
// }

// popupFormCard.addEventListener('submit', onSubmitCard);



// function render() {
//   const elementHTML = initialCards.map(createCard);
//   elementList.append(...elementHTML);
// }

// function toggleLike(event) {
//   event.target.classList.toggle('element__like_active');
// }

// function removeElement(evt) {
//   const elementCard = evt.target.closest('.element__list');
//   elementCard.remove();
// }

// function createCard (item) {
//   const templateCard = templateElement.content.cloneNode(true);
//   const name = templateCard.querySelector('.element__title');
//   const link = templateCard.querySelector('.element__image');
//   const deleteButtonCard = templateCard.querySelector('.element__delete');
//   const buttonLike = templateCard.querySelector('.element__like');

//   const elementImage = templateCard.querySelector('.element__image');
//   const popupContainerImage = modalWindowImage.querySelector('.popup__container_image');
//   const imagePopup = modalWindowImage.querySelector('.popup__image');
//   const textImage = modalWindowImage.querySelector('.popup__text-image');

//   name.textContent = item.name;
//   link.src = item.link;
//   link.alt = item.name;

//   function imageInput() {
//     imagePopup.src = item.link;
//     imagePopup.alt = item.name;
//     textImage.textContent = item.name;
//   };

//   elementImage.addEventListener('click', function() {
//     openPopup(modalWindowImage);
//     imageInput();
//   });

//   deleteButtonCard.addEventListener('click', removeElement);
//   buttonLike.addEventListener('click', toggleLike);

//   return templateCard;
// }

// render();