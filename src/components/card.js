import { likeCard, unlikeCard } from "./api.js";

const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, handleDel, handleOpenFullImage, handleLike, ownId) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = cardItem.querySelector('.card__image');
  const cardDelBtn = cardItem.querySelector('.card__delete-button');
  const cardTitle = cardItem.querySelector('.card__title');
  const cardLikeBtn = cardItem.querySelector('.card__like-button');
  const cardLikeCounter = cardItem.querySelector('.card__like-counter');
  const cardID = card._id;

  cardImg.alt = card.name;
  cardTitle.textContent = card.name;
  cardImg.src = card.link;
  cardItem.id = cardID;

  cardLikeCounter.textContent = card.likes.length;
  if (card.owner['_id'] !== ownId) {
    cardDelBtn.style.display = 'none';
  } else {
    cardDelBtn.addEventListener('click', () => {
      handleDel(cardID);
    });
  }

  cardLikeBtn.addEventListener('click', () => {
    handleLike(cardLikeBtn, cardLikeCounter, cardID)
  });

  cardImg.addEventListener('click', handleOpenFullImage);

  const selfLikes = card.likes.find((element) => element._id === ownId);
  if (selfLikes) {
    cardLikeBtn.classList.add('card__like-button_is-active')
  };

  return cardItem;
}

function handleLikeCard(button, likeCounter, id) {
  if (button.classList.contains('card__like-button_is-active')) {
    unlikeCard(id)
      .then(data => {
        button.classList.remove('card__like-button_is-active');
        likeCounter.textContent = data.likes.length;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  else {
    likeCard(id)
      .then(data => {
        button.classList.add('card__like-button_is-active');
        likeCounter.textContent = data.likes.length;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function handleDeleteCardFromList(id) {
  const card = document.querySelector(`[id='${id}']`);
  card.remove();
}

export { createCard, handleLikeCard, handleDeleteCardFromList }
