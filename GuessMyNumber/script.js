'use strict';
// const message = document.querySelector('.message').textContent;
// console.log(message);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

//define the secret number to compare to the input number after every event handling
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//display
//event listensr
document.querySelector('.check').addEventListener('click', function () {
  //Number converts the stringy input value into an actual number
  const inputValue = Number(document.querySelector('.guess').value);
  //   document.querySelector('.number').textContent = inputValue;
  document.querySelector('.message').textContent = 'Correct Number!';
  console.log(inputValue);
  //implementing simplest game logic if no value input
  if (!inputValue) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (inputValue) {
  }
});
// document.querySelector('.number').textContent = inputValue;
