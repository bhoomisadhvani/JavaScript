

// clearInterval is use for you can stop block of code at every specified time you can use clearInterval


// 1

const stop = setInterval(() => {
  console.log("hello - clearInterval.js:9");
}, 1000);

setTimeout(() => {
  clearInterval(stop);
}, 3000);

// 2

const num = setInterval(() => {
  console.log("number is 4 - clearInterval.js:19");
}, 3000);

setTimeout(() => {
  clearInterval(num);
}, 6000);

// 3

const fruit = setInterval(() => {
  console.log("watermelon - clearInterval.js:29");
}, 2000);

setTimeout(() => {
  clearInterval(fruit);
}, 3000);