

// this method is use for execute block of code at given every time repeat.

//  syntax
// setInterval(function,milliseconds)

// 1

function timing() {
  let time = new Date().toLocaleTimeString();

  console.log("timing is : - setInterval.js:13", time);
}

setInterval(timing, 1000);

// 2

function day(){
    console.log("wednesday - setInterval.js:21")
}

setInterval(day,3000)

// 3

function veggie(){
    console.log("potato - setInterval.js:29")
}

setInterval(veggie,2000)