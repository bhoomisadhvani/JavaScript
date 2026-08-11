// some

const num = [1, 2, 3, 4, 5, 6];

const result = num.some((x) => {
  return x > 2;
});

console.log(result);

// every

const age = [15, 18, 20, 33, 44];

const res = age.every((y) => {
  return y > 15;
});

console.log(res);

// reverse

console.log(num.reverse());

// indexOf

console.log(num.indexOf(5));
