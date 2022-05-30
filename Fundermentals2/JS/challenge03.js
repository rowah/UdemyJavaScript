// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
const person1 = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function (mass, height) {
    person1.bmi = person1.mass / person1.height ** 2;
    return person1.bmi;
  },
};
const person2 = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function (mass, height) {
    person2.bmi = person2.mass / person2.height ** 2;
    return person2.bmi;
  },
};
person1.calcBMI();
person2.calcBMI();

console.log(person1.calcBMI());

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (person1.bmi > person2.bmi) {
  console.log(
    `${person1.name}'s BMI (${person1.bmi}) is higher than ${person2.name}'s (${person2.bmi}).`
  );
} else if (person2.bmi > person1.bmi) {
  console.log(
    `${person2.name}'s BMI (${person2.bmi} is higher than ${person1.name}'s (${person1.bmi}).`
  );
}
// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀
