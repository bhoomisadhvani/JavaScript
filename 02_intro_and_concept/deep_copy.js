
// deep copy means passed by value

// deep copy -> primitive

// primitive stored in stack , imutable, copy by value
// ex : String,null,undefined,Number,symbol,BigInt

let a = 20;

let b = a;

console.log("a before value - deep_copy.js:13", a);
console.log("b before value - deep_copy.js:14", b);

b = 35;

console.log("a after value - deep_copy.js:18", a);
console.log("b after value - deep_copy.js:19", b);

// 2


let c = 50;

let d = c;

console.log("c before value - deep_copy.js:28", c);
console.log("d before value - deep_copy.js:29", d);

d = 85;

console.log("c after value - deep_copy.js:33", c);
console.log("d after value - deep_copy.js:34", d);

// 3


let e = 100;

let f = e;

console.log("e before value - deep_copy.js:43", e);
console.log("f before value - deep_copy.js:44", f);

f = 56;

console.log("e after value - deep_copy.js:48", e);
console.log("f after value - deep_copy.js:49", f);