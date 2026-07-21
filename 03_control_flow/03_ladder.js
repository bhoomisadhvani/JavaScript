// in the javascript else if ladder is used for check multiple CSSCondition.

// 1

let temperature = 33;

if (temperature >= 40) {
  console.log("Extreme Heat - 03_ladder.js:8");
} else if (temperature >= 30) {
  console.log("Hot Weather - 03_ladder.js:10");
} else if (temperature >= 20) {
  console.log("Normal Weather - 03_ladder.js:12");
} else if (temperature >= 10) {
  console.log("Cold Weather - 03_ladder.js:14");
} else {
  console.log("Freezing Weather - 03_ladder.js:16");
}

// 2

let orderValue = 1200;

if (orderValue >= 2000) {
  console.log("Free Shipping + Gift - 03_ladder.js:24");
} else if (orderValue >= 1000) {
  console.log("Free Shipping - 03_ladder.js:26");
} else if (orderValue >= 500) {
  console.log("Shipping cost: $5 - 03_ladder.js:28");
} else {
  console.log("Shipping cost: - 03_ladder.js:30");
}

// 3

let speed = 150;

if (speed > 120) {
  console.log("speed is extra fast - 03_ladder.js:38");
} else if (speed > 100) {
  console.log("speed is fast - 03_ladder.js:40");
} else if (speed > 80) {
  console.log("speed is normal - 03_ladder.js:42");
} else {
  console.log("invalid number - 03_ladder.js:44");
}
