import Card from "./Card.js";
//wraps
const cardsWrap = document.querySelector(".cards__list");
const editFormModalWindow = document.querySelector("#edit-popup");
const cardFormModalWindow = document.querySelector("#new-card-popup");
const cardFormElement = cardFormModalWindow.querySelector(".popup__form");
const profileFormElement = editFormModalWindow.querySelector(".popup__form");
//profile DOM
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//form data and elements
const titleInput = editFormModalWindow.querySelector(".popup__input_type_name");
const descriptionInput = editFormModalWindow.querySelector(
  ".popup__input_type_description"
);
const cardNameInput = cardFormModalWindow.querySelector(
  ".popup__input_type_card-name"
);
const cardLinkInput = cardFormModalWindow.querySelector(
  ".popup__input_type_url"
);

//image modal elements
const imageModalWindow = document.querySelector("#image-popup");
const imageElement = imageModalWindow.querySelector(".popup__image");
const imageCaption = imageModalWindow.querySelector(".popup__caption");

//handlers
const isEscEvent = (evt, action) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    action(activePopup);
  }
};
const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModal);
};
const closeModal = (modal, validators) => {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEscUp);
  validators?.forEach((validator) => {
    validator.ResetValidation();
  });
};
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = titleInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editFormModalWindow);
};
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  renderCard(newCard, cardsWrap);
  closeModal(cardFormModalWindow);
  cardFormElement.reset();
};
const createCard = (data) => {
  return new Card(data, "#card-template").getView();
};
const renderCard = (data, wrap) => {
  wrap.prepend(createCard(data));
};

const handleOpenEditModal = (modal) => {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(modal);
};
const handleOpenAddCardModal = (modal) => {
  openModal(modal);
};
const handlePopupClose = (evt, validators) => {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    closeModal(evt.currentTarget, validators);
  }
};
const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEscUp);
};

const handleImageClick = (card) => {
  imageElement.src = card.getLink();
  imageCaption.textContent = card.getName();
  imageElement.alt = card.getName();
  openModal(imageModalWindow);

};

export {
  openModal,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleOpenEditModal,
  handleOpenAddCardModal,
  handlePopupClose,
  renderCard,
  handleImageClick
};
