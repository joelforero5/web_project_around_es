import {
  //openModal,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleOpenEditModal,
  handleOpenAddCardModal,
  handlePopupClose,
  renderCard,
  openModal,
  initialCards,
  validationConfig,
  openEditFormButton,
  openAddCardFormButton,
  popup,
  profileFormSelector,
  cardFormSelector,
  cardFormElement,
  profileFormElement
} from "./utils.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";


//wraps
const cardsWraps = document.querySelector(".cards__list");
const editFormModalWindow = document.querySelector("#edit-popup");
const cardFormModalWindow = document.querySelector("#new-card-popup");
const cardFormValidator  = new FormValidator(validationConfig, cardFormElement);
const profileFormValidator  = new FormValidator(validationConfig, profileFormElement);

const popupProfileForm = new PopupWithForm("#edit-popup",profileFormSelector,handleProfileFormSubmit);
popupProfileForm.setEventListeners();
const popupCardForm = new PopupWithForm("#new-card-popup",cardFormSelector,handleCardFormSubmit);
popupCardForm.setEventListeners();
const popupImage = new PopupWithImage("#image-popup");
popupImage.setEventListeners();
openEditFormButton.addEventListener("click", () => {
  handleOpenEditModal(editFormModalWindow);
});

openAddCardFormButton.addEventListener("click", () => {
  handleOpenAddCardModal(cardFormModalWindow);
});

const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, "#card-template",popupImage);
      sectionCards.addItem(card.getView());
    }
  },
  ".cards__list"
);
sectionCards.renderItems();


//popups.forEach((popup) => {
 // popup.addEventListener("mousedown", (evt) => {
   // handlePopupClose(evt,[cardFormValidator,profileFormValidator]);
  //});
//});

//profileFormElement.addEventListener("submit", handleProfileFormSubmit);
//cardFormElement.addEventListener("submit", handleCardFormSubmit);


cardFormValidator.enableValidation();
profileFormValidator.enableValidation();