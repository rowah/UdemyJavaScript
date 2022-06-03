'use strict';
// const message = document.querySelector('.message').textContent;
// console.log(message);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

//define the secret number to compare to the input number after every event handling
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//display secret number under the question mark on the dom
document.querySelector('.number').textContent = secretNumber;
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
  } else if (inputValue < secretNumber) {
    document.querySelector('.message').textContent =
      'Wrong! The number is too low! Guess Again';
    document.querySelector('.score').textContent -= 1;
  } else if (inputValue === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (inputValue > secretNumber) {
    document.querySelector('.message').textContent =
      'Wrong! The number is too high! Guess Again';
    document.querySelector('.score').textContent -= 1;
  }
});
// document.querySelector('.number').textContent = inputValue;
