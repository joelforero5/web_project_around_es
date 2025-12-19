class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add("popup_is-opened");
    }

    close() {
        this._popup.classList.remove("popup_is-opened");
    }
    _hanldeEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
            if (
                evt.target.classList.contains("popup") ||
                evt.target.classList.contains("popup__close")
            ) {
                this.close();
            }
        });
        
    }
}