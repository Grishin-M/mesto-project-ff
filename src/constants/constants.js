const cardsList = document.querySelector('.places__list');

const editBtn = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editForm = document.forms['edit-profile'];
const editFormName = editForm.elements.name;
const editFormDescription = editForm.elements.description;
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const popup = document.querySelector('.popup_type_image');
const popupImg = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupCloseBtn = document.querySelectorAll('.popup__close');

const popupAddCard = document.querySelector('.popup_type_new-card');
const popupAddBtn = document.querySelector('.profile__add-button');
const cardAddForm = document.forms['new-place'];
const cardAddName = cardAddForm.elements['place-name'];
const cardAddLink = cardAddForm.elements.link;

export {
  cardsList,
  editBtn,
  editPopup,
  editForm,
  editFormName,
  editFormDescription,
  profileName,
  profileDescription,
  popup,
  popupImg,
  popupCaption,
  popupCloseBtn,
  popupAddCard,
  popupAddBtn,
  cardAddForm,
  cardAddName,
  cardAddLink,
}