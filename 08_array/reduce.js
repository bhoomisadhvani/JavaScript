let cart = [
  { item: "Shoes", qty: 2 },
  { item: "Shirt", qty: 3 },
  { item: "Cap", qty: 1 },
];

let totalItems = cart.reduce((count, product) => {
  return count + product.qty;
}, 0);

console.log(totalItems);

// 2

let numbers = [4, 8, 15, 16, 23];

let max = numbers.reduce((biggest, curr) => {
  return curr > biggest ? curr : biggest;
}, numbers[0]);

console.log(max);
