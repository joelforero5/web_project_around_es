class FormValidator {
  constructor(config,formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
  }

  enableValidation=()=>{
      this._setEventListeners(this._formElement); 

  }

  _setEventListeners=(formElement)=>{
    
    const buttonElement = formElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(buttonElement);
      });
    });
    formElement.addEventListener("reset", () =>  {
      setTimeout(() => {
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement, formElement.querySelector(`#${inputElement.id}-error`));
        });
        this._toggleButtonState(buttonElement);
      }, 0);
    });

  }
  _checkInputValidity=(formElement, inputElement)=>{
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }
  _showInputError=(inputElement, errorElement, errorMessage)=>{
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError=(inputElement, errorElement)=>{
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }
  _toggleButtonState=(buttonElement)=>{
    if (this._hasInvalidInput(this._inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  _hasInvalidInput=(inputList)=>{
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }
  ResetValidation=()=>{
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(buttonElement);
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement, this._formElement.querySelector(`#${inputElement.id}-error`));
    });
  }
}
export default FormValidator;