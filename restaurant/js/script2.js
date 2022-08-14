"use strict";

const restaurant = {
  name: "White Elephant",
  location: "Rsuinga Island, HomaBay, Kenya",
  categories: ["Vegarian", "Organic", "Italian", "Pizzeria"],
  starterMenu: ["Focassia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Beef", "Fish", "Pizza"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  //method to order food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Hunters 14th Street",
  mainIndex: 2,
  starterIndex: 2,
});

//object destructuring using curly braces
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//destructuring objs
let a = 111;
let b = 234;
const obj = {
  a: 23,
  b: 45,
  c: 12,
};
({ a, b } = obj);
console.log(a, b); //23 45

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
