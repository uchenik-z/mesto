const editButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const closeButton = modalWindow.querySelector('.popup__close');
const popupForm = modalWindow.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__text_input_name');
const jobInput = popupForm.querySelector('.popup__text_input_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const saveButton = modalWindow.querySelector('.popup__save');

function onPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  modalWindow.classList.add('popup_opened');
}

editButton.addEventListener('click', onPopup);

function closePopup() {
  modalWindow.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function onSubmit(event) {
  event.preventDefault();
   profileTitle.textContent = nameInput.value;
   profileSubtitle.textContent = jobInput.value;

   closePopup()
}

popupForm.addEventListener('submit', onSubmit);
