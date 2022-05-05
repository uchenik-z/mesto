const initialCards = [
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

const popupBlock = document.querySelector('.popup');
const input = popupBlock.querySelector('.popup__input');

const editButton = document.querySelector('.profile__edit-button');
const modalWindowProfile = document.querySelector('.popup_place_profile');
const closeButtonProfile = modalWindowProfile.querySelector('.popup__close');
const popupFormProfile = modalWindowProfile.querySelector('.popup__form');
const nameInput = popupFormProfile.querySelector('.popup__input_type_name');
const jobInput = popupFormProfile.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const saveButton = modalWindowProfile.querySelector('.popup__button');
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

function onSubmitCard(event) {
  event.preventDefault();
  const titleInput = popupFormCard.querySelector('.popup__input_type_title').value;
  const linkInput = popupFormCard.querySelector('.popup__input_type_link').value;
  const element = createCard({name: titleInput, link: linkInput});
  elementList.prepend(element);
  closePopup(modalWindowCard);
  popupFormCard.reset();
  setSubmitButtonStateCard(false);
}

popupFormCard.addEventListener('submit', onSubmitCard,);


function render() {
  const elementHTML = initialCards.map(createCard);
  elementList.append(...elementHTML);
}

function createCard (item) {
  const templateCard = templateElement.content.cloneNode(true);
  const name = templateCard.querySelector('.element__title');
  const link = templateCard.querySelector('.element__image');
  const deleteButtonCard = templateCard.querySelector('.element__delete');
  const buttonLike = templateCard.querySelector('.element__like');

  const elementImage = templateCard.querySelector('.element__image');
  const popupContainerImage = modalWindowImage.querySelector('.popup__container_image');
  const imagePopup = modalWindowImage.querySelector('.popup__image');
  const textImage = modalWindowImage.querySelector('.popup__text-image');

  name.textContent = item.name;
  link.src = item.link;
  link.alt = item.name;

  function toggleLike(event) {
    event.target.classList.toggle('element__like_active');
  }

  function removeElement(evt) {
    const elementCard = evt.target.closest('.element__list');
    elementCard.remove();
  }

    function imageInput() {
    imagePopup.src = item.link;
    imagePopup.alt = item.name;
    textImage.textContent = item.name;
  };

  elementImage.addEventListener('click', function() {
    openPopup(modalWindowImage);
    imageInput();
  });

  deleteButtonCard.addEventListener('click', removeElement);
  buttonLike.addEventListener('click', toggleLike);

  return templateCard;
}

render();





// Активная и неактивная кнопка

function setSubmitButtonStateProfile(isFormValid) {
  if (isFormValid) {
    saveButtonProfile.removeAttribute('disabled');
    saveButtonProfile.classList.remove('popup__button_disabled');
  } else {
    saveButtonProfile.setAttribute('disabled', true);
    saveButtonProfile.classList.add('popup__button_disabled');
  }
}

popupFormProfile.addEventListener('input', function (evt) {
  const isValid = nameInput.value.length > 0 && jobInput.value.length > 0;
  setSubmitButtonStateProfile(isValid);
});


function setSubmitButtonStateCard(isFormValid) {
  if (isFormValid) {
    saveButtonCard.removeAttribute('disabled');
    saveButtonCard.classList.remove('popup__button_disabled');
  } else {
    saveButtonCard.setAttribute('disabled', true);
    saveButtonCard.classList.add('popup__button_disabled');
  }
}

popupFormCard.addEventListener('input', function (evt) {
  const isValid = titleInput.value.length > 0 && linkInput.value.length > 0;
  setSubmitButtonStateCard(isValid);
});




// Валидация форм








// function enableValidation(config) {
//   const form = document.querySelector(config.formSelector);
//   const inputs = form.querySelector(config.inputSelector);

//   inputs.forEach((element) => {
//     element.addEventListener('input', (event) => handleFormSubmit(event, form, config));
//   });

//   form.addEventListener('submit', (event) => handleFormSubmit(event, form));

//   toggleButton(form, config);
// }

// function toggleButton(form, config) {
//   const button = document.querySelector(config.buttonSelector);
//   button.classList.toggle('popup__save_disabled', !form.checkValidity());
// }

// function handleFormSubmit(event, form) {
//   event.preventDefault();

//   if (form.checkValidity()) {
//     alert('Форма валидна');
//   } else {
//     alert('Форма не валидна');
//   }
// }

// function handleFormInput(event, form, config) {
//   const input = event.target;
//   const errorNode = document.querySelector(`#${input.id}-error`);

//   if (input.validity.valid) {
//     errorNode.textContent = '';
//   } else {
//     errorNode.textContent = input.validationMessage;
//   }

//   toggleButton(form, config);

// }

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   buttonSelector: '.popup__button'
// });
















// document.addEventListener('keydown', (event) => {
//   if (event.target.classList.contains('popup_opened')) {
//     closePopup();
//   }
// });

// function closePopup() {
//   document.querySelector('.popup_opened').classList.remove('popup_opened');
// }





// function overlayClose(event) {
//   if (event.target === event.currentTarget) {
//     closePopup(popupBlock);
//   };
// }

// popupBlock.addEventListener('click', overlayClose);


