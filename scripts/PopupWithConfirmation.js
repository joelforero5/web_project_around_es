import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._confirmButton = popupElement.querySelector(".popup__button");
    }

    open(handleConfirm) {
        super.open();
        this.handleConfirm = handleConfirm;
    }
    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener("click", () => {
            if (this.handleConfirm) this.handleConfirm();
            this.close();
        });
    }
}