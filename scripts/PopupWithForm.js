// PopupWithForm.js
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector("form");
    this._inputList = Array.from(this._form.querySelectorAll("input"));
    this._submitButton = this._form.querySelector("button[type='submit']");
  }

  // Recolecta datos de los inputs
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  // Setea el evento submit del popup
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  // Limpia inputs
  close() {
    super.close();
    this._form.reset();
  }
}