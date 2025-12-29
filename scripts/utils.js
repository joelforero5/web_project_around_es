import Card from "./Card.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
//constants
export const editFormSelector = ".edit-profile-form";
//data and elements
export const initialCards = [
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
//validation config
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

//wraps

export const editFormModalWindow = document.querySelector("#edit-popup");
export const cardFormModalWindow = document.querySelector("#new-card-popup");
export const profileFormSelector = "#edit-profile-form";
export const cardFormSelector = "#new-card-form";
export const cardFormElement = cardFormModalWindow.querySelector("#new-card-form");
export const profileFormElement = editFormModalWindow.querySelector("#edit-profile-form");
//profile DOM
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");

//form data and elements
export const openAddCardFormButton = document.querySelector(".profile__add-button");
export const openEditFormButton = document.querySelector(
  ".profile__edit-button"
);
export const titleInput = editFormModalWindow.querySelector(".popup__input_type_name");
export const descriptionInput = editFormModalWindow.querySelector(
  ".popup__input_type_description"
);
export const cardNameInput = cardFormModalWindow.querySelector(
  ".popup__input_type_card-name"
);
export const cardLinkInput = cardFormModalWindow.querySelector(
  ".popup__input_type_url"
);

//image modal elements
export const imageModalWindow = document.querySelector("#image-popup");
export const imageElement = imageModalWindow.querySelector(".popup__image");
export const imageCaption = imageModalWindow.querySelector(".card__description");
export const imageLikeButton = imageModalWindow.querySelector(".card__like-button"); 
export const imageDeleteButton = imageModalWindow.querySelector(".card__delete-button");
export const closeImageButton = imageModalWindow.querySelector(".popup__close");
export const closeEditButton = editFormModalWindow.querySelector(".popup__close");
export const popupImage = new PopupWithImage("#image-popup");
export const popupCardForm = new PopupWithForm("#new-card-popup");
export const popupProfileForm = new PopupWithForm("#edit-popup");
export const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

export const handleProfileFormSubmit = (evt) => {
  //profileTitle.textContent = titleInput.value;
  //profileDescription.textContent = descriptionInput.value;
  userInfo.setUserInfo({
    name: titleInput.value,
    description: descriptionInput.value,
  });
  popupProfileForm.close();
};
export const handleCardFormSubmit = (evt) => {
  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  const newCardSection = new Section(
    {
      items: [newCard],
      renderer: (cardData) => {
        const card = new Card(cardData, "#card-template", popupImage);
        newCardSection.addItem(card.getView());
      },
    },
    ".cards__list"
  );
  newCardSection.renderItems();
};

export const handleOpenEditModal = (modal) => {
  //titleInput.value = profileTitle.textContent;
  //descriptionInput.value = profileDescription.textContent;
  const userData = userInfo.getUserInfo();
  titleInput.value = userData.name;
  descriptionInput.value = userData.description;
  modal.open();
};
export const handleOpenAddCardModal = (modal) => {
  modal.open();
};


