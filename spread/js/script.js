const arr = [1, 2, 3];
//const newArr = [arr[0], arr[1], arr[2], 4, 5];//1, 2, 3, 4, 5
//altenative using spread operator
const newArr = [...arr, 4, 5]; //1, 2, 3, 4, 5
console.log(newArr); //[1, 2, 3, 4, 5]
console.log(...newArr); // 1, 2, 3, 4, 5
