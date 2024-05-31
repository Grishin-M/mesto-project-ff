import './styles/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';
import {
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
} from './constants/constants.js'

function addCard(card, list) {
  const createdCard = createCard(card, deleteCard, likeCard, openFullImage);
  list.append(createdCard);
}

initialCards.forEach((card) => { addCard(card, cardsList) });

editBtn.addEventListener('click', () => {
  editFormName.value = profileName.textContent;
  editFormDescription.value = profileDescription.textContent;
  openModal(editPopup);
});

function openFullImage(evt) {
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openModal(popup);
}

function closeByButton(evt) {
  const popup = evt.target.closest('.popup');
  closeModal(popup);
}

popupCloseBtn.forEach((button) => {
  button.addEventListener('click', closeByButton);
})

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileDescription.textContent = editFormDescription.value;

  closeModal(editPopup);
}

editForm.addEventListener('submit', handleFormSubmit);

popupAddBtn.addEventListener('click', () => {
  cardAddForm.reset();
  openModal(popupAddCard);
});

function addCardFromForm(evt) {
  evt.preventDefault();
  const name = cardAddName.value;
  const link = cardAddLink.value;
  const card = { name, link };
  const createdCard = createCard(card, deleteCard, likeCard, openFullImage);
  cardsList.prepend(createdCard);
  closeModal(popupAddCard);
}

cardAddForm.addEventListener('submit', (evt) => {
  addCardFromForm(evt)
});