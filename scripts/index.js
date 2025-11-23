import {
  //openModal,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleOpenEditModal,
  handleOpenAddCardModal,
  handlePopupClose,
  renderCard,
  openModal,
} from "./utils.js";
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__Button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".error_visible",
};

//buttons
const openEditFormButton = document.querySelector(".profile__edit-button");
const openAddCardFormButton = document.querySelector(".profile__add-button");
//popups
const popups = document.querySelectorAll(".popup");
//forms
const cardForm = document.forms["new-card-form"];
const profileForm = document.forms["edit-profile-form"];
//wraps
const cardsWraps = document.querySelector(".cards__list");
const editFormModalWindow = document.querySelector("#edit-popup");
const cardFormModalWindow = document.querySelector("#new-card-popup");

//listeners
initialCards.forEach((cardData) => {
  renderCard(cardData, cardsWraps);
});

openEditFormButton.addEventListener("click", () => {
  handleOpenEditModal(editFormModalWindow);
});

openAddCardFormButton.addEventListener("click", () => {
  handleOpenAddCardModal(cardFormModalWindow);
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    handlePopupClose(evt, validationConfig);
  });
});

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);
