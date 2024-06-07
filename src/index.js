import './styles/index.css';
import { createCard, handleLikeCard, handleDeleteCardFromList } from './components/card.js';
import { openModal, closeModal, handleCloseByButton } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { updateProfile, postNewCard, deleteCard, updateProfileImage } from './components/api.js';
import {
  cardsContainer,
  profileEditBtn,
  editPopup,
  profileEditForm,
  profileInputEditFormName,
  profileInputEditFormDescription,
  profileName,
  profileDescription,
  popupFullImg,
  popupImg,
  popupCaption,
  popupCloseBtns,
  popupAddCard,
  popupAddBtn,
  cardAddForm,
  cardAddNameInput,
  cardAddLinkInput,
  profileEditSubmitBtn,
  profileImage,
  cardSubmitBtns,
  initialDataResponsePromises,
  cardDeletePopup,
  cardDeleteForm,
  imageEditPopup,
  imageEditBtn,
  imageEditForm,
  imageFormInput,
  imageFormSubmitBtn,
  validationConfig,
} from './constants/constants.js'

let ownId = "";

Promise.all(initialDataResponsePromises)
  .then(([cards, profile]) => {
    ownId = profile._id;
    profileName.textContent = profile.name;
    profileDescription.textContent = profile.about;
    profileImage.style.backgroundImage = `url('${profile.avatar}')`;
    cards.forEach((card) => addCard(card, cardsContainer));
  })
  .catch(error => {
    console.error(error);
  })

function addCard(card, list) {
  const createdCard = createCard(card, handleOpenDeleteCardPopup, handleOpenFullImage, handleLikeCard, ownId);
  list.append(createdCard);
}

profileEditBtn.addEventListener('click', () => {
  clearValidation(profileEditForm, validationConfig);
  profileInputEditFormName.value = profileName.textContent;
  profileInputEditFormDescription.value = profileDescription.textContent;
  openModal(editPopup);
});

function handleOpenFullImage(evt) {
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openModal(popupFullImg);
}

popupCloseBtns.forEach((button) => {
  button.addEventListener('click', handleCloseByButton);
})

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileEditSubmitBtn.textContent = "Сохранение...";
  updateProfile(profileInputEditFormName.value, profileInputEditFormDescription.value)
    .then((data) => {
      profileName.textContent = profileInputEditFormName.value;
      profileDescription.textContent = profileInputEditFormDescription.value;
      closeModal(editPopup);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      profileEditSubmitBtn.textContent = "Сохранить";
    })
}

profileEditForm.addEventListener('submit', handleSubmitProfileForm);

popupAddBtn.addEventListener('click', () => {
  clearValidation(cardAddForm, validationConfig);
  cardAddForm.reset();
  openModal(popupAddCard);
});

function handleAddCardFromForm(evt) {
  evt.preventDefault();
  cardSubmitBtns.textContent = "Сохранение...";
  const name = cardAddNameInput.value;
  const link = cardAddLinkInput.value;
  postNewCard(name, link)
    .then((data) => {
      cardsContainer.prepend(createCard(data, handleOpenDeleteCardPopup, handleOpenFullImage, handleLikeCard, ownId));
      closeModal(popupAddCard);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      cardSubmitBtns.textContent = "Сохранить";
    })

}

cardAddForm.addEventListener('submit', (evt) => {
  handleAddCardFromForm(evt)
});

function handleOpenDeleteCardPopup(id) {
  cardDeleteForm.dataset.id = id;
  openModal(cardDeletePopup);
}

function handleDeleteCard(evt) {
  evt.preventDefault();
  const id = cardDeleteForm.dataset.id;
  deleteCard(id)
    .then(() => {
      handleDeleteCardFromList(id);
      closeModal(cardDeletePopup);
    })
    .catch((error) => {
      console.error(error);
    })
}

cardDeleteForm.addEventListener('submit', handleDeleteCard);

imageEditBtn.addEventListener('click', () => {
  imageEditForm.reset();
  clearValidation(imageEditForm, validationConfig);
  openModal(imageEditPopup);
});

function handleUpdateProfileImage(evt) {
  evt.preventDefault();
  imageFormSubmitBtn.textContent = "Сохранение...";
  updateProfileImage(imageFormInput.value)
    .then((data) => {
      profileImage.style.backgroundImage = `url('${data.avatar}')`;
      closeModal(imageEditPopup);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      imageFormSubmitBtn.textContent = 'Сохранить';
    });
}

imageEditForm.addEventListener('submit', handleUpdateProfileImage);

enableValidation(validationConfig);