const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

function createCard(card, deleteFunction) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardItemImage = cardItem.querySelector('.card__image');
  const deleteButton = cardItem.querySelector('.card__delete-button');
  const cardItemTitle = cardItem.querySelector('.card__title');

  cardItemImage.src = card.link;
  cardItemTitle.textContent = card.name;
  cardItemImage.alt = card.name;

  deleteButton.addEventListener('click', deleteFunction);

  return cardItem;
}

function addCard(card, list) {
  const createdCard = createCard(card, deleteCard);
  list.append(createdCard);
}

function deleteCard(evt) {
  const cardToDelete = evt.target.closest('.card');
  cardToDelete.remove();
}

initialCards.forEach((card) => {
  addCard(card, placesList)
});