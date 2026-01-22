// index.js
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import Card from "./Card.js";
import {
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleEditAvatarFormSubmit,
  handleOpenEditModal,
  handleOpenAddCardModal,
  handleOpenEditAvatarModal,
  validationConfig,
  openEditFormButton,
  openAddCardFormButton,
  userInfo,
  popupImage,
  editFormModalWindow,
  cardFormModalWindow,
  profileFormSelector,
  cardFormSelector,
  cardsContainerSelector,
  deleteConfirmationModalWindow,
  editAvatarModalWindow,
  avatarFormSelector,
  openEditAvatarButton

} from "./utils.js";
import Api from'./Api.js'
// --------------------
// API
// --------------------
// {
//   "user":
//   {
//     "name":"Jacques Cousteau",
//     "about":"Explorador",
//     "avatar":"https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
//     "_id":"14957a26bb059fe91bc3d4ad"
//   },
//   "token":"7715041c-740f-4e0a-9eea-f5585a367f50"
// }
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "7715041c-740f-4e0a-9eea-f5585a367f50",
    "Content-Type": "application/json"
  }
});

// --------------------
// SECCIÓN DE TARJETAS
// --------------------
const sectionCards = new Section(
  {
    renderer: (cardData,newCard) => {
      const card = new Card(
        cardData,
        "#card-template", 
        popupImage,
        (cardId, cardElement) => {
        popupDeleteConfirmation.open(() => {
          api.deleteCard(cardId).then(() => {
            cardElement.remove();
          }).catch((err) => {
            console.log(err);
          });
        });
      },
      (cardInstance) => {
        const request = cardInstance._isliked ? api.removeLike(cardInstance._id) : api.addLike(cardInstance._id);
        request.then((updatedCardData) => {
          cardInstance._setLikeState(updatedCardData.isLiked)
        });
      });
      sectionCards.addItem(card.getView(),newCard);
    }
  },
  cardsContainerSelector
);




async function loadInitialData() {
  try{
    const [userData, initialCards] = await Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ]);
    userInfo.setUserInfo({name: userData.name, description: userData.about, avatar: userData.avatar});
    sectionCards.renderItems(initialCards,false);
   
  }catch(err){
    console.log(err);
  }
}
loadInitialData();

// -------------------
// VALIDADORES
// --------------------
const profileFormValidator = new FormValidator(validationConfig, editFormModalWindow.querySelector(profileFormSelector));
const cardFormValidator = new FormValidator(validationConfig, cardFormModalWindow.querySelector(cardFormSelector));

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();


// --------------------
// POPUPS
// --------------------

// Popup perfil
const popupProfileForm = new PopupWithForm(editFormModalWindow, (formData) => {
  handleProfileFormSubmit(api,formData, popupProfileForm);
});
popupProfileForm.setEventListeners();

// Popup nueva tarjeta
const popupCardForm = new PopupWithForm(cardFormModalWindow, (formData) => {
  handleCardFormSubmit(api,formData, sectionCards, popupCardForm);
});
popupCardForm.setEventListeners();
const popupAvatarForm = new PopupWithForm(editAvatarModalWindow, (formData) => {
  handleEditAvatarFormSubmit(api,formData, popupAvatarForm);
});
popupAvatarForm.setEventListeners();
// Popup confirmación borrado
const popupDeleteConfirmation = new PopupWithConfirmation(deleteConfirmationModalWindow);
popupDeleteConfirmation.setEventListeners();
// Popup imagen
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
openEditAvatarButton.addEventListener("click", () => {
  handleOpenEditAvatarModal(popupAvatarForm); 
});