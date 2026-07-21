// nested if means when the condition is true then the other condition is check, when the both condition will 
// true then the code will be execute.

// 1

let hasAccount = true;
let correctPassword = true;

if (hasAccount) {
  if (correctPassword) {
    console.log("Login successful. - 04_nested.js:11");
  }
}

// 2

let shopOpen = true;
let Stock = true;

if (shopOpen) {
    if (Stock) {
        console.log("You can buy this item. - 04_nested.js:22");
    }
}

// 3

let Weekend = true;
let goodWeather = true;

if (Weekend) {
    if (goodWeather) {
        console.log("Let's go for a picnic! - 04_nested.js:33");
    }
}
