'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(btnOpenModal);

//adding event listsner to the buttons
for (let i = 0; i < btnOpenModal.length; i++)
  //console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener('click', () => {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });

//create a function closeModal
function closeModal() {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);

overLay.addEventListener('click', closeModal);
