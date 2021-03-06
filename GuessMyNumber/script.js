'use strict';
// const message = document.querySelector('.message').textContent;
// console.log(message);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

//define the secret number to compare to the input number after every event handling
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//display secret number under the question mark on the dom
//document.querySelector('.number').textContent = secretNumber;
//event listensr
document.querySelector('.check').addEventListener('click', function () {
  //Number converts the stringy input value into an actual number
  const inputValue = Number(document.querySelector('.guess').value);
  //   document.querySelector('.number').textContent = inputValue;
  //document.querySelector('.message').textContent = 'Correct Number!';
  displayMessage('Correct Number!');
  console.log(inputValue);
  //implementing simplest game logic if no value input
  //no input
  if (!inputValue) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
    //input low
  } else if (inputValue !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     inputValue < secretNumber
      //       ? 'Wrong! The number is too low!'
      //       : 'Wrong! The number is too high!';
      displayMessage(
        inputValue < secretNumber
          ? 'Wrong! The number is too low!'
          : 'Wrong! The number is too high!'
      );
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      //document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
    //winning condition
  } else if (inputValue === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //display secret number under the question mark on the dom
    document.querySelector('.number').textContent = secretNumber;

    //Manipulating the highscore
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  }
  //input greater
  //   } else if (inputValue > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Wrong! The number is too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  //rehide the hiddennumber
  score = 20;
  //document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
