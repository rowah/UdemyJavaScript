let age = 30; //first memory address is created
let oldAge = age;
age = 31; //new adress is created to hold the second value
console.log(age);
console.log(oldAge);
//on the console oldAge is 30 because at the time oldAge is assgned age, the age variable is still 30
//promitives are stored in the call stack

const me = {
  name: "Rowah",
  age: 28,
};

const friend = me;
friend.age = 25;
console.log("Friend:", friend);
console.log("Me:", me);
//source of confusion: changing the age of friend chnages the age of me as well
//new object is stored in the heap, while the stack just keeps the reference to where the object is stored in the heap
//the friend identifier points directly to me address that contains the reference that points to the object itself and so the friend obj is exactly the same as me obj
//a value is then changed in the heap and the address remains the same, so me age avlue also changes
//primitive vs reference values

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//copying objects using function.assign (only creates a shallow copy)
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 23,
};
const jessica2 = Object.assign({}, jessica);
jessica2.lastName = "Rowah";
console.log(jessica);
console.log(jessica2);
