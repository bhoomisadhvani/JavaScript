// callback function is that is passed as an argument to another function.

// using callback we can do asynchronous task in js

// a callback function it runs after another function has finished

// when you passed function as an argument don't use parenthesis

// example

function greeting(greet) {
  console.log(`hello ${greet} good morning - callback.js:12`);
}

function greetUser(greet, greeting) {
  console.log("hii - callback.js:16");
  greeting(greet);
}

greetUser("john", greeting);
