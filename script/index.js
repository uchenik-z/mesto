const editButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const closeButton = modalWindow.querySelector('.popup__close');
const popupForm = modalWindow.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__text_name');
const jobInput = popupForm.querySelector('.popup__text_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const saveButton = modalWindow.querySelector('.popup__save');

function togglePopup() {
  modalWindow.classList.toggle('popup_opened');
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

function overlayClick(event) {
  if (event.target === event.currentTarget) {
    togglePopup()
  }
}

modalWindow.addEventListener('click', overlayClick);

function onSubmit(event) {
  event.preventDefault();
   profileTitle.textContent = nameInput.value;
   profileSubtitle.textContent = jobInput.value;

   togglePopup()
}

popupForm.addEventListener('submit', onSubmit);
