"use strict";

const restaurant = {
  name: "White Elephant",
  location: "Rsuinga Island, HomaBay, Kenya",
  categories: ["Vegarian", "Organic", "Italian", "Pizzeria"],
  starterMenu: ["Focassia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Beef", "Fish", "Pizza"],
  //method to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//array destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

//taking the first two restaurant categories
let [first, second, , forth] = restaurant.categories;
console.log(first, second, forth); //gives Vegarian, Organic and Pizzeria
//reassgning
[first, second] = [second, first];
console.log(first, second);
console.log(restaurant.order(0, 2)); //can now be destructured

//destructruing with nested array
const nested = [1, 2, 3, [5, 6]];
// const [i, , , j] = nested;
// console.log(i, j);
const [i, , , [j]] = nested;
console.log(j);
