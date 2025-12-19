class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector(".popup__image");
        this._popupCaption = this._popup.querySelector(".popup__caption");
    }
    open(data){
        this._popupImage.src = data.getLink();
        this._popupImage.alt = data.getName();
        this._popupCaption.textContent = data.getName();
        super.open();
    }
}
export default PopupWithImage;