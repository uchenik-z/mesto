const formSelector = document.querySelector('.popup__form');
const inputSelector = formSelector.querySelector('.popup__input');

formSelector.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

inputSelector.addEventListener('input', function (evt) {
  console.log(evt.target.validity);
});