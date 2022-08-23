'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data one object for each account
const account1 = {
  owner: 'James Rowa',
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
const displayMovement = function (movements, sort = false) {
  //empting the container
  containerMovements.innerHTML = '';
  //checks if sort is true then creates a copy of movements array and sorting it: without the slice copy of the arrya, soting would be done on the underlying movements array on the objects. If sort is false, the regular movements get displayed
  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;
  //creates a new html to display movements. each iteration creates a movement's row and displays data
  moves.forEach(function (movement, i) {
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

// displayMovement(account1.movements);

//calcculating and printing account balance
const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${account.balance}€`;
};
// calcPrintBalance(account1.movements);

//sums up transactions
const calcDisplaySummary = function (account) {
  const allDeposits = account.movements
    .filter(movement => movement > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${allDeposits}€`;
  const allWithdawals = account.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement, 0);
  labelSumOut.textContent = `${Math.abs(allWithdawals)}€`;

  //interest rate
  const cumInterest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${cumInterest.toFixed(2)}€`;
};

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

const updateUI = function (account) {
  //2. Calc and display balance: call calcPrintBalance function with currentAccount.movement as the argument
  calcPrintBalance(account);

  //3. Calc and display account summary: call calcDisplaySummary function with currentAccount.movement as the argument
  calcDisplaySummary(account);

  //4. Display current account movements: call displayMovement function with currentAccount.movement as the argument
  displayMovement(account.movements);
};

//login implementation through event handlers
//create currentAccount variable outside of the function as it will be needed elsewhere
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //prevents default page reload when the form button is clicked by preventing form from submitting //pressing enter key produces the same event as clicking the submit button by default
  event.preventDefault();
  //log in the user by finding the username from the account that the user inputted
  currentAccount = accounts.find(
    account => account.userName === inputLoginUsername.value
  );
  //checks if input pin is similar to the pin in account with the username
  //converts the pininput value to a number coz it's a string by default
  //? chaining helps the pin to be read only if the current account exists to prevent the default error response of the find method when currentAccount does not exist
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //what to do when the pin and username are correct
    //1. Display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //displaying UI by setting the .app opacity to 100
    containerApp.style.opacity = 100;

    //clearing input field after successful login
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    //input field lose focus
    inputLoginPin.blur();

    updateUI(currentAccount);
  } else {
    //invalid credetials
    containerApp.style.opacity = 0;
    alert('Invalid userName or PIN\nPlease try again!');
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
  }
});

//implementing transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  //find receiver account that matches the userName in the input to be trasferred to
  const receiverAccount = accounts.find(
    account => account.userName === inputTransferTo.value
  );
  console.log(amount, receiverAccount);
  //add negative movement to current user while ensuring the receiver account is not the same as current account (different usernames), money being sent is not more than the account balance, and the amount being transferred is greater than 0. Also checks if receiver account exists
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName
  ) {
    //transfers
    //add new negative movement to the current account
    currentAccount.movements.push(-amount);
    //add new positive movement on the receiver account
    receiverAccount.movements.push(amount);

    //updating ui
    updateUI(currentAccount);
  }
  //clears input fields outside the if statement since it has to happen whether transaction is successful or not
  inputTransferAmount.value = inputTransferTo.value = '';
});

//Loan Request
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);
  console.log(loan);
  //some method tests if any of the movements is greater than 10% of the loan
  if (
    loan > 0 &&
    currentAccount.movements.some(movement => movement >= (loan * 10) / 100)
  ) {
    currentAccount.movements.push(loan);

    //updating ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
//deleting account
//1.find the indexof account to be deleted and slice with the index as argument then update UI opacity to 0
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('Delete');

    const acctoDelIndex = accounts.findIndex(
      account => account.userName === currentAccount.userName
    );
    //delete account
    accounts.splice(acctoDelIndex, 1);
    //update UI
    containerApp.style.opacity = 0;
  }
  //clear input fields
  inputCloseUsername.value = inputClosePin.value = '';
});

//determines if we are currently sorting
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  //call the displayMovement with sort set to true for sorting to occur on every click
  displayMovement(currentAccount.movements, !sorted); //does the opposite of sorted so that if it's sorted it becomes false and otherwise when not
  sorted = !sorted; //flips the variable from true to false and back
});
/////////////////////////////////////////////

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
