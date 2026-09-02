
// clearTimeout is use for if you want to stop this setTimeout so you can use this function.

// 1

const msg = setTimeout(() => {
  console.log("hello - clearTimeout.js:7");
}, 3000);

clearTimeout(msg);

// 2

const thing=setTimeout(()=>{
    console.log("the thing is... - clearTimeout.js:15")
},5000)

clearTimeout(thing)

// 3

const greet = setTimeout(() => {
  console.log("gm - clearTimeout.js:23");
}, 2000);

clearTimeout(greet);

