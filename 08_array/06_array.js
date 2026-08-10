const fruits = ["banana", "kiwi", "orange", "watermelon", "grapes"];

console.log("fruits  04_array.js:5  05_array.js:3 - 06_array.js:3", fruits);

// join

console.log("join method - 06_array.js:7", fruits.join(" - "));

// flat

const num=[1,2,3,4,5,6]

console.log(num)

console.log(num.flat())

// nested Array

const number=[1,2,3,4,5,[6,7,8,[9,10,11]]]

console.log(number)

console.log("nested array - 06_array.js:23",number.flat(Infinity));

// slice

console.log(fruits.slice(1, 3));