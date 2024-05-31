function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalViaEscape);
  document.addEventListener('mousedown', closeModalViaOverlay);
}

function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalViaEscape);
  document.removeEventListener('mousedown', closeModalViaOverlay);
}

function closeModalViaEscape(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened');
    closeModal(popup);
  }
}

function closeModalViaOverlay(evt) {
  if (evt.target.classList.contains('popup_is-opened')) {
    const popup = document.querySelector('.popup_is-opened');
    closeModal(popup);
  }
}

export { openModal, closeModal }