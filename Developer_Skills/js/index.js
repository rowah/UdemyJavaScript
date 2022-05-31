"use strict";
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
//create the function
function printForecast(arr) {
  //create an empty string to concat the other strings
  let finalString = "";
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //create a variable with the first sting
    //adding each element to the string(get the elemnt by its index)
    //adding days (has to start from 1 so its index+1 days)
    let string = `... ${arr[i]} ºC in ${i + 1} days `;
    //update the final string for each iteration
    finalString += string;
  }
  //log the result
  console.log(finalString + "...");
}
printForecast([17, 21, 23]);
