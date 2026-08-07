// adding element

const fruits = ["strawberry", "kiwi", "banana", "cherry"];

console.log("array - 03_array.js:5", fruits.length, fruits);

//  adding  element in  array

fruits.push("litchie");

console.log("after adding - 03_array.js:11", fruits.length, fruits);

// adding element from the start

fruits.unshift("mango");

console.log("starting element - 03_array.js:17", fruits);

//  remove last element

fruits.pop();

console.log("remove last element - 03_array.js:23", fruits);

// remove first element

fruits.shift();

console.log("remove first element - 03_array.js:29", fruits);

// splice

// add
fruits.splice(1, 1, "grapes");

console.log("add - 03_array.js:36", fruits);

// remove

fruits.splice(1, 2);

console.log("remove - 03_array.js:42", fruits);
