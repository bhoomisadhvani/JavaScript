
// break keyword is use for stop the code execution

// 1

let cities = ["paris", "london", "cairo", "dubai", "sydney", "toronto"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
  if (cities[i] === "dubai") {
    console.log("City Found: - 01_break.js:10", cities[i]);
    break;
  }
}

// 2

let scores = [45, 60, 72, 88, 95, 100];
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
  if (scores[i] === 88) {
    console.log("Score Found: - 01_break.js:21", scores[i]);
    break;
  }
}

// 3


let colors = ["red", "green", "blue", "yellow", "purple", "black"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
  if (colors[i] === "yellow") {
    console.log("Color Found: - 01_break.js:33", colors[i]);
    break;
  }
}
