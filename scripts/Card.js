
class Card {
  constructor(data, cardSelector,handleCardClick, handleDeleteConfirm,handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._isliked = data.isLiked || false;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._popupImage = handleCardClick;
    this._handleDeleteConfirm = handleDeleteConfirm
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
  _setEventListeners() {
    this._deleteButton.addEventListener("click",()=>{ 
    this._handleDeleteConfirm(this._id, this._element );});
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });
    
    this._handleCardClick();
  }

  _handleCardClick(){
    this._element.querySelector(".card__image").addEventListener("click", () => {
      const data = {name: this._name, link: this._link};
      this._popupImage.open(data);
    });
  }
  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  };
  _setLikeState(isLiked){
    this._isliked = isLiked;
    this._updateLikeState();
  }
  _updateLikeState() {
    if (this._isliked) {
      this._likeButton.classList.add("card__like-button_is-active");
    } else {
      this._likeButton.classList.remove("card__like-button_is-active");
    }
  }
  getView() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".card__image");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._cardTitle = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._updateLikeState();
    //set listeners
    this._setEventListeners();
    return this._element;
  }
  getLink() {
    return this._link;
  }
  getName() {
    return this._name;
  }
}
export default Card;
