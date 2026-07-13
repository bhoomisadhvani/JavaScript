// in the javascript there are 7 types of operator

// 1 arithmetic operator
// 2 assignment operator
// 3 comparison operator
// 4 logical ooperator
// 5 unary operator
// 6 ternary operator
// 7 typeof operator

// 1. Arithmetic Operator

let x = 45;
let y = 7;

console.log("Addition:  operators2.js:6 - operators.js:16", x + y);
console.log("Subtraction:  operators2.js:7 - operators.js:17", x - y);
console.log("Multiplication:  operators2.js:8 - operators.js:18", x * y);
console.log("Division:  operators2.js:9 - operators.js:19", x / y);
console.log("Modulus:  operators2.js:10 - operators.js:20", x % y);
console.log("Exponention:  operators2.js:11 - operators.js:21", x ** 2);

// 2. Assignment Operators //

let score = 50;
score -= 5;
console.log("score after = 5:  operators2.js:17 - operators.js:27", score);

score /= 5;
console.log("score after /= 5:  operators2.js:20 - operators.js:30", score);

score %= 4;
console.log("score after %= 4:  operators2.js:23 - operators.js:33", score);

// 3. Comparison Operators //

console.log("Equal to:  operators2.js:27 - operators.js:37", "20" == 20);
console.log("Strict Equal:  operators2.js:28 - operators.js:38", "20" === 20);
console.log("Not Equal to:  operators2.js:29 - operators.js:39", 15 != 15);
console.log("Greater Than:  operators2.js:30 - operators.js:40", 8 > 12);
console.log(
  "Less Than or Equal:  operators2.js:31",
  10 <= 10,
);

// 4. Logical Operators //

let hasLicense = true;
let hasHelmet = false;

// AND //
console.log("AND: - operators.js:52", hasLicense && hasHelmet);

// OR //
console.log("OR:  operators2.js:41 - operators.js:55", hasLicense || hasHelmet);

// NOT //
console.log("NOT:  operators2.js:44 - operators.js:58", !hasHelmet);

// 5. Unary Operator //

let counter = 10;
counter++;
console.log("Increment:  operators2.js:54 - operators.js:64", counter);

counter--;
console.log("Decrement:  operators2.js:57 - operators.js:67", counter);

// 6. Ternary Operator //

let marks = 33;
let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result:  operators2.js:63 - operators.js:73", result);

// 7. Typeof Operator //

console.log("Type of 'Hello':  operators2.js:67 - operators.js:77", typeof "Hello");
console.log("Type of true:  operators2.js:68 - operators.js:78", typeof true);
console.log("Type of undefined:  operators2.js:69 - operators.js:79", typeof undefined);
console.log("Type of {}:  operators2.js:70 - operators.js:80", typeof {});
