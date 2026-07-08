// const has block scope.
// when we declare const variable at the time we must initialization otherwise generate error.
// const value did not change after initailization

function schoolName() {

    const school = "ABC High School";

    console.log("School Name is: - const.js:9", school);
}

schoolName();

// reinitializing is not possiable

// school = "XYZ School"; // Error

// const city; // Error
// city = "Surat";


// 2// 



function programmingLanguage() {

    const language = "JavaScript";

    console.log("Programming Language is: - const.js:30", language);
}

programmingLanguage();

// language = "Python"; // Error

// const course; // Error

// course = "Web Development";

// when we declare const variable at the time we must initialization otherwise generate error.


// console.log("course - const.js:41",course);



//3 //



function fruitName() {

    const fruit = "Mango";

    console.log("Fruit Name is: - const.js:56", fruit);
}

fruitName();

// fruit = "Apple"; 

// const color; 

// color = "Yellow";

// console.log("color is - const.js:67",color);
