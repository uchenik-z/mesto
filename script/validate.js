const formSelector = document.querySelector('.popup__form');
const inputSelector = formSelector.querySelector('.popup__input');


const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const isValid = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
};

const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  const submitButtonSelector = formSelector.querySelector('.popup__button');

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      isValid(formSelector, inputSelector)
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formSelector);
  });
};

enableValidation();


const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  })
};

const toggleButtonState = (inputList, submitButtonSelector) => {
  if (hasInvalidInput(inputList)) {
    submitButtonSelector.classList.add('popup__button_disabled');
    submitButtonSelector.setAttribute('disabled', true);
  } else {
    submitButtonSelector.classList.remove('popup__button_disabled');
    submitButtonSelector.removeAttribute('disabled');
  }
};

