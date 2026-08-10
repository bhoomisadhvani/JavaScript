const fruits = ["banana", "kiwi", "orange", "watermelon", "grapes"];

console.log("fruits  04_array.js:5 - 05_array.js:3", fruits);

// for loop

for (let i = 0; i < fruits.length; i++) {
  console.log("fruits => - 05_array.js:8", fruits[i]);
}

// for of loop

for (let fruit of fruits) {
  console.log(fruit);
}

// forEach

fruits.forEach((fruits, position) => {
  console.log(position, fruits);
});

// concat

let veggies = ["brocoli", "potato", "tomato", "cabbage"];

let shopItems = veggies.concat(fruits);

console.log("shop items - 05_array.js:29", shopItems);

// convert into String

console.log("into string - 05_array.js:33", shopItems.toString());
