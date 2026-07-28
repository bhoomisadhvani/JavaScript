// hoisting means you can use that variable and function before they declared.

// it can only use in var datatype.

a = 10;

console.log(a);

var a;

// let is not hoisted so that this can generate reference console.error;

// console.log(x);

// let x;

// 1

play();

function play() {
  console.log("she is playing - 02_hoisting.js:22");
}

hoisted = "hello";

console.log(hoisted);

var hoisted;

// 2

greet();

function greet() {
  console.log("Hello from greet - 02_hoisting.js:36");
}

message = "hi there";

console.log(message);

var message;

// 3

sayBye();

function sayBye() {
  console.log("say good byy - 02_hoisting.js:50");
}

count = 50;

console.log(count);

var count;
