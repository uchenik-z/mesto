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

const editButton = document.querySelector('.profile__edit-button');
const modalWindowProfile = document.querySelector('.popup_place_profile');
const closeButtonProfile = modalWindowProfile.querySelector('.popup__close');
const popupFormProfile = modalWindowProfile.querySelector('.popup__form');
const nameInput = popupFormProfile.querySelector('.popup__text_input_name');
const jobInput = popupFormProfile.querySelector('.popup__text_input_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const saveButton = modalWindowProfile.querySelector('.popup__save');

const addButton = document.querySelector('.profile__add-button');
const modalWindowCard = document.querySelector('.popup_place_card');
const closeButtonCard = modalWindowCard.querySelector('.popup__close');
const popupFormCard = modalWindowCard.querySelector('.popup__form');
const titleInput = popupFormCard.querySelector('.popup__text_input_title');
const linkInput = popupFormCard.querySelector('.popup__text_input_link');

const elementList = document.querySelector('.element');
const templateElement = document.querySelector('.template-element');

function onPopup(popup) {
  popup.classList.add('popup_opened');
}

function profileInput() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

editButton.addEventListener('click', function() {
  onPopup(modalWindowProfile);
  profileInput();
});

addButton.addEventListener('click', function() {
  onPopup(modalWindowCard);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

closeButtonProfile.addEventListener('click', function() {
  closePopup(modalWindowProfile);
});

closeButtonCard.addEventListener('click', function() {
  closePopup(modalWindowCard);
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
  const titleInput = popupFormCard.querySelector('.popup__text_input_title').value;
  const linkInput = popupFormCard.querySelector('.popup__text_input_link').value;
  const element = getElementHTML({name: titleInput, link: linkInput});
  elementList.prepend(element);
  closePopup(modalWindowCard);
}

popupFormCard.addEventListener('submit', onSubmitCard);


function render() {
  const elementHTML = initialCards.map(getElementHTML);
  elementList.append(...elementHTML);
}

function getElementHTML (item) {
  const getElementTemplate = templateElement.content.cloneNode(true);
  const name = getElementTemplate.querySelector('.element__title');
  const link = getElementTemplate.querySelector('.element__image');
  const deleteButtonCard = getElementTemplate.querySelector('.element__delete');
  const buttonLike = getElementTemplate.querySelector('.element__like');


  name.textContent = item.name;
  link.src = item.link;

  function toggleLike(event) {
    event.target.classList.toggle('element__like_active');
  }

  deleteButtonCard.addEventListener('click', removeElement);
  buttonLike.addEventListener('click', toggleLike);

  return getElementTemplate;
}

function removeElement(evt) {
  const elementCard = evt.target.closest('.element__list');
  elementCard.remove();
}



render();









