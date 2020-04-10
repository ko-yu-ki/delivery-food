const cartButton  = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal-close');
const buttonReject = document.querySelector('.button-reject');
const cards = document.querySelectorAll('.card');


cartButton.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeButton.addEventListener('click', toggleModal);

buttonReject.addEventListener('click', () => {
  modal.classList.remove('is-open');
});


function toggleModal() {
  modal.classList.toggle('is-open');
}

new WOW().init();
