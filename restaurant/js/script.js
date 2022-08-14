"use strict";

const restaurant = {
  name: "White Elephant",
  location: "Rsuinga Island, HomaBay, Kenya",
  categories: ["Vegarian", "Organic", "Italian", "Pizzeria"],
  starterMenu: ["Focassia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Beef", "Fish", "Pizza"],
};

//array destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

//taking the first two restaurant categories
const [first, second, , forth] = restaurant.categories;
console.log(first, second, forth); //gives Vegarian, Organic and Pizzeria
