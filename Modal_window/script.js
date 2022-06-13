'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.show-modal');

console.log(btnCloseModal);

//adding event listsner to the buttons
for (let i = 0; i < btnCloseModal.length; i++)
  //console.log(btnCloseModal[i].textContent);
  btnCloseModal[i].addEventListener('click', () => {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });
