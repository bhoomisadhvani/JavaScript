
// continue keyword is use for skip the current iteration.

// 1

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
}

// 2


let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Mango") {
        continue;
    }
    console.log(fruits[i]);
}

// 3

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}