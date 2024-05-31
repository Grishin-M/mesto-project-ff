const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, delFunction, likeFunction, openFullImgFunction) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = cardItem.querySelector('.card__image');
  const cardDeleteBtn = cardItem.querySelector('.card__delete-button');
  const cardTitle = cardItem.querySelector('.card__title');
  const cardLikeBtn = cardItem.querySelector('.card__like-button');

  cardImg.alt = card.name;
  cardTitle.textContent = card.name;
  cardImg.src = card.link;

  cardDeleteBtn.addEventListener('click', delFunction);
  cardLikeBtn.addEventListener('click', likeFunction);
  cardImg.addEventListener('click', openFullImgFunction);

  return cardItem;
}

function deleteCard(evt) {
  const cardToDelete = evt.target.closest('.card');
  cardToDelete.remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard }