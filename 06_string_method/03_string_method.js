let msg = "today we are learning coding";

console.log("msg  01_string_method.js:3  02_string_method.js:3 - 03_string_method.js:3", msg);


// SPLIT 
// split => string ko array of substrings me todta hai
console.log("split example 1  => - 03_string_method.js:8", msg.split(" "));
console.log("split example 2  => - 03_string_method.js:9", msg.split(""));
console.log("split example 3  => - 03_string_method.js:10", msg.split("a"));


// SUBSTRING vs SLICE

// ---- SUBSTRING ----
console.log("substring example 1  => - 03_string_method.js:16", msg.substring(4));
console.log("substring example 2  => - 03_string_method.js:17", msg.substring(10, 3));
console.log("substring example 3  => - 03_string_method.js:18", msg.substring(-5));

// ---- SLICE ----
console.log("slice example 1  => - 03_string_method.js:21", msg.slice(4));
console.log("slice example 2  => - 03_string_method.js:22", msg.slice(10, 3));
console.log("slice example 3  => - 03_string_method.js:23", msg.slice(-5));


//  toLowerCase 
console.log("toLowerCase example 1 => - 03_string_method.js:27", "TODAY WE ARE LEARNING CODING".toLowerCase());
console.log("toLowerCase example 2 => - 03_string_method.js:28", "JavaScript IS FUN".toLowerCase());
console.log("toLowerCase example 3 => - 03_string_method.js:29", msg.toLowerCase());


//  toUpperCase 
console.log("toUpperCase example 1 => - 03_string_method.js:33", "today we are learning coding".toUpperCase());
console.log("toUpperCase example 2 => - 03_string_method.js:34", "javascript is fun".toUpperCase());
console.log("toUpperCase example 3 => - 03_string_method.js:35", msg.toUpperCase());


//  TRIM 
let msg1 = "        hello         ";
let msg2 = "   javascript rocks   ";
let msg3 = "no space here";

console.log("trim example 1 => length before: - 03_string_method.js:43", msg1.length, " length after:", msg1.trim().length);
console.log("trim example 2 => length before: - 03_string_method.js:44", msg2.length, " length after:", msg2.trim().length);
console.log("trim example 3 => length before: - 03_string_method.js:45", msg3.length, " length after:", msg3.trim().length);