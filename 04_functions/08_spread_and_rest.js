// spread is use for expand or spread elments of array or Object

let arr = [1, 2, 3, 4, 5];
console.log(...arr);

// rest is used in arguments

function cooking(...cooking) {
  console.log("You can cook: - 08_spread_and_rest.js:9", ...cooking); // It will print all the games
}

cooking("biryani", "manchurian", "noodles");


