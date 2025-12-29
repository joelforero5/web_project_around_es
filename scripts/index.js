import {
  //openModal,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleOpenEditModal,
  handleOpenAddCardModal,
  initialCards,
  validationConfig,
  openEditFormButton,
  openAddCardFormButton,
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

const cardFormValidator  = new FormValidator(validationConfig, cardFormElement);
const profileFormValidator  = new FormValidator(validationConfig, profileFormElement);

const popupProfileForm = new PopupWithForm("#edit-popup",profileFormSelector,handleProfileFormSubmit);
popupProfileForm.setEventListeners();
const popupCardForm = new PopupWithForm("#new-card-popup",cardFormSelector,handleCardFormSubmit);
popupCardForm.setEventListeners();
const popupImage = new PopupWithImage("#image-popup");
popupImage.setEventListeners();
 openEditFormButton.addEventListener("click", () => {
  handleOpenEditModal(popupProfileForm);
});

 openAddCardFormButton.addEventListener("click", () => {
  handleOpenAddCardModal(popupCardForm);
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

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();