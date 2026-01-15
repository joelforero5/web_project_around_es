// index.js
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import Card from "./Card.js";
import {
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleOpenEditModal,
  handleOpenAddCardModal,
  initialCards,
  validationConfig,
  openEditFormButton,
  openAddCardFormButton,
  userInfo,
  popupImage,
  editFormModalWindow,
  cardFormModalWindow,
  profileFormSelector,
  cardFormSelector,
  cardsContainerSelector
} from "./utils.js";

// --------------------
// VALIDADORES
// --------------------
const profileFormValidator = new FormValidator(validationConfig, editFormModalWindow.querySelector(profileFormSelector));
const cardFormValidator = new FormValidator(validationConfig, cardFormModalWindow.querySelector(cardFormSelector));

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

// --------------------
// SECCIÓN DE TARJETAS
// --------------------
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, "#card-template", popupImage);
      sectionCards.addItem(card.getView());
    },
  },
  cardsContainerSelector
);

sectionCards.renderItems();

// --------------------
// POPUPS
// --------------------

// Popup perfil
const popupProfileForm = new PopupWithForm(editFormModalWindow, (formData) => {
  handleProfileFormSubmit(formData, popupProfileForm);
});
popupProfileForm.setEventListeners();

// Popup nueva tarjeta
const popupCardForm = new PopupWithForm(cardFormModalWindow, (formData) => {
  handleCardFormSubmit(formData, sectionCards, popupCardForm);
});
popupCardForm.setEventListeners();

// Popup imagen (ya importado desde utils)
popupImage.setEventListeners();

// --------------------
// EVENT LISTENERS BOTONES
// --------------------
openEditFormButton.addEventListener("click", () => {
  handleOpenEditModal(popupProfileForm);
});

openAddCardFormButton.addEventListener("click", () => {
  handleOpenAddCardModal(popupCardForm);
});