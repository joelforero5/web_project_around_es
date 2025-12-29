//import { closeModal} from "./utils.js";
class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
        this._closeButton = this._popupElement.querySelector(".popup__close");
    }

    open() {
        this._popupElement.classList.add("popup_is-opened");
    }

    close() {
        this._popupElement.classList.remove("popup_is-opened");
    }
    _hanldeEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    setEventListeners() {
        this._popupElement.addEventListener("mousedown", (evt) => {
            if (
                evt.target.classList.contains("popup") ||
                evt.target.classList.contains("popup__close")
            ) {
                this.close();
            }
        });
        document.addEventListener("keyup", this._hanldeEscClose);
        
    }
}
export default Popup;