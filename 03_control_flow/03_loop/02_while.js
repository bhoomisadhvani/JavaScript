// while loop is use when execute of block code is repetadely as long as condition is true

// 1

let i = 2;
while (i <= 20) {
  console.log(i);
  i = i + 2;
}

// 2

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// 3

let i = 1;
let product = 1;
while (i <= 5) {
  product = product * i;
  i++;
}
console.log("Total Product = - 02_while.js:28", product);
