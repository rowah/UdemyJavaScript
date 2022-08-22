'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data one object for each account
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

//array with data objects
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////DOM manipulations to display bank movements on the app
//Create a display movement function
const displayMovement = function (movements) {
  //empting the container
  containerMovements.innerHTML = '';

  //creates a new html to display movements. each iteration creates a movement's row and displays data
  movements.forEach(function (movement, i) {
    //determines withdrawal or deposit
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    //create a html template literal
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${[
      i + 1,
    ]} ${type}</div>
        <div class="movements__value">${movement}€</div>
    </div>`;
    //insering the creates html using the .insertA
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);

//calcculating and printing account balance
const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};
calcPrintBalance(account1.movements);

//sums up transactions
const calcDisplaySummary = function (movements) {
  const allDeposits = movements
    .filter(movement => movement > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${allDeposits}€`;
  const allWithdawals = movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumOut.textContent = `${Math.abs(allWithdawals)}€`;

  //interest rate
  const cumInterest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${cumInterest}€`;
};

calcDisplaySummary(account1.movements);

//computing usernames for bank users

const createUserNames = function (accounts) {
  //transform string to lowercase
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

//login implementation through event handlers
//create currentaccount variable outside of the function as it will be needed elsewhere
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //prevents default page reload when the form button is clicked by preventing form from submitting //pressing enter key produces the same event as clicking the submit button by default
  event.preventDefault();
  //log in the user by finding the username from the account that the user inputted
  currentAccount = accounts.find(
    account => account.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  //checks if input pin is similar to the pin in account with the username
  //converts the pininput value to a number coz it's a string by default
  //? chaining helps the pin to be read only if the current account exists to prevent the default error response of the find method when currentAccount does not exist
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
  }
});
/////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//looping over to print each movement for bank account: pos values are deposits, negative values are withdrwals
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited $${movement}`);
//   } else {
//     console.log(`You withdrew $${Math.abs(movement)}`);
//   }
// }

//OR FOREACH
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited $${movement}`);
//   } else {
//     console.log(`You withdrew $${Math.abs(movement)}`);
//   }
// });

//OR FUNCTION CALL
// const moveThrough = function (movement, i) {
//   if (movement > 0) {
//     console.log(`Movement ${[i + 1]}: You deposited $${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}`);
//   }
// };

// movements.forEach(moveThrough);
