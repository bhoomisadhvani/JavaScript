// include

const fruits = ["banana", "kiwi", "orange", "watermelon", "grapes"];

console.log(fruits.includes("mango - 08_array.js:5"));

// sort

let alpha = ["a", "b", "c", "e", "t", "y", "f"];

console.log(alpha.sort());

// ascending

let num = [3, 5, 6, 2, 4, 5, 2, 5, 6, 5, 1];

console.log(num.sort());

// descending

num.sort((a, b) => b - a);

console.log(num);

// name in descending

let name = "john";
let name2 = " ";

for (let i = name.length - 1; i >= 0; i--) {
  name2 = name2 + name[i];
}

console.log(name2);

// find

const number = [1, 34, 25, 6, 2, 6, 7];

let result = number.find((value) => value > 5);

console.log(result);

// findIndex

let res = number.findIndex((value) => value > 5);

console.log(res);
