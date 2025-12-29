import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(popupSelector,formSelector,handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupElement = document.querySelector(popupSelector);
        this._form = this._popupElement.querySelector(formSelector);
    }
    
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener("submit",(evt)=>{
            evt.preventDefault();
            this._handleFormSubmit();
            this.close();
        });
    }
    close(){
        super.close();
        this._form.reset();
    }
}
export default PopupWithForm;