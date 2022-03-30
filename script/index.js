const editButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const closeButton = modalWindow.querySelector('.popup__close');

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

