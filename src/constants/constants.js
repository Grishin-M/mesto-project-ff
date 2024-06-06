import { getCards, getProfile } from '../components/api.js';

const cardsContainer = document.querySelector('.places__list');

const editBtn = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editFormProfile = document.forms['edit-profile'];
const editFormNameProfileInput = editFormProfile.elements.name;
const editFormDescriptionProfileInput = editFormProfile.elements.description;
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditSubmitBtn = editFormProfile.querySelector('.popup__button');
const profileImage = document.querySelector('.profile__image');

const popupFullImg = document.querySelector('.popup_type_image');
const popupImg = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupCloseBtn = document.querySelectorAll('.popup__close');

const popupAddCard = document.querySelector('.popup_type_new-card');
const popupAddBtn = document.querySelector('.profile__add-button');
const cardAddForm = document.forms['new-place'];
const cardAddNameInput = cardAddForm.elements['place-name'];
const cardAddLinkInput = cardAddForm.elements.link;

const cardSubmitBtn = cardAddForm.querySelector('.popup__button');
const initialDataResponsePromises = [getCards(), getProfile()];

const cardDeletePopup = document.querySelector('.popup_type_delete-card');
const cardDeleteForm = document.forms['delete-card'];

const imageEditPopup = document.querySelector('.popup_type_edit-image');
const imageEditBtn = document.querySelector('.profile__image-button');
const imageEditForm = document.forms['edit-image'];
const imageFormInput = imageEditForm.elements.link;
const imageFormSubmitBtn = imageEditForm.querySelector('.popup__button');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  disabledButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export {
  cardsContainer,
  editBtn,
  editPopup,
  editFormProfile,
  editFormNameProfileInput,
  editFormDescriptionProfileInput,
  profileName,
  profileDescription,
  popupFullImg,
  popupImg,
  popupCaption,
  popupCloseBtn,
  popupAddCard,
  popupAddBtn,
  cardAddForm,
  cardAddNameInput,
  cardAddLinkInput,
  profileEditSubmitBtn,
  profileImage,
  cardSubmitBtn,
  initialDataResponsePromises,
  cardDeletePopup,
  cardDeleteForm,
  imageEditPopup,
  imageEditBtn,
  imageEditForm,
  imageFormInput,
  imageFormSubmitBtn,
  validationConfig,
}