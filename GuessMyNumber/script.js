'use strict';
const message = document.querySelector('.message').textContent;
console.log(message);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//event listensr
document.querySelector('.check').addEventListener('click', function () {
  const inputValue = document.querySelector('.guess').value;
  document.querySelector('.number').textContent = inputValue;
  //   console.log(inputValue);
});
// document.querySelector('.number').textContent = inputValue;
