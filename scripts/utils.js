// utils.js
import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

// --------------------
// CONSTANTES / SELECTORES
// --------------------

// Popups
export const editFormModalWindow = document.querySelector("#edit-popup");
export const cardFormModalWindow = document.querySelector("#new-card-popup");
export const imageModalWindow = document.querySelector("#image-popup");

// Forms
export const profileFormSelector = "#edit-profile-form";
export const cardFormSelector = "#new-card-form";

// Botones
export const openEditFormButton = document.querySelector(".profile__edit-button");
export const openAddCardFormButton = document.querySelector(".profile__add-button");

// Inputs
export const titleInput = document.querySelector(".popup__input_type_name");
export const descriptionInput = document.querySelector(".popup__input_type_description");
export const cardNameInput = document.querySelector(".popup__input_type_card-name");
export const cardLinkInput = document.querySelector(".popup__input_type_url");

// Profile info
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");

// Cards container
export const cardsContainerSelector = ".cards__list";

// Configuración validación
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

// Datos iniciales
export const initialCards = [
  { name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg" },
  { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg" },
  { name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg" },
  { name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg" },
];

// --------------------
// INSTANCIAS GENERALES
// --------------------

// UserInfo
export const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

// Popup imagen
export const popupImage = new PopupWithImage(imageModalWindow);

// --------------------
// HANDLERS GENERALES
// --------------------

// Abrir modal edición perfil
export const handleOpenEditModal = (modal) => {
  const data = userInfo.getUserInfo();
  titleInput.value = data.name;
  descriptionInput.value = data.description;
  modal.open();
};

// Abrir modal agregar tarjeta
export const handleOpenAddCardModal = (modal) => {
  modal.open();
};

// Submit formulario perfil
export const handleProfileFormSubmit = (formData, popup) => {
  userInfo.setUserInfo({
    name: formData.name,
    description: formData.description
  });
  popup.close();
};

// Submit formulario tarjeta
export const handleCardFormSubmit = (formData, section, popup) => {
  const card = new Card(
    { name: formData.name, link: formData.link },
    "#card-template",
    popupImage
  );
  section.addItem(card.getView());
  popup.close();
};