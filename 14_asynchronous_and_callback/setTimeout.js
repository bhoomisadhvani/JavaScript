// setTimeout is use for execute the code after the specified Time.
// syntax
// setTimeout(function,milliseconds)

// 1

const msg = () => {
  console.log("hello - setTimeout.js:8");

  setTimeout(() => {
    console.log("welcome to javascript - setTimeout.js:11");
  }, 5000);
};

msg();

// 2

const name = () => {
  console.log("hello - setTimeout.js:20");

  setTimeout(() => {
    console.log("my name is.......... - setTimeout.js:23");
  }, 2000);
};

name();

// 3

const greeting = () => {
  console.log("good morning - setTimeout.js:32");

  setTimeout(() => {
    console.log("have a nice day - setTimeout.js:35");
  }, 4000);
};

greeting();
