//  shallow copy means copy by reference 

// shallow copy -> Non-primitive

// primitive stored in heap , mutable, copy by reference 
// ex : object

// array and object is one type of object

// null is also object because of mistake of language

let bank1 = {
    amount: 10000  
};

let bank2 = bank1;

bank2.amount = 8000;

console.log("bank1 amount is - shallow.js:20", bank1.amount); 
console.log("bank2 amount is - shallow.js:21", bank2.amount); 

// 2

let person1 = {
    name: "abc"  
};

let person2 = person1;

person2.name = "john";

console.log("person1 name is - shallow.js:33", person1.name); 
console.log("person2 name is - shallow.js:34", person2.name); 


// 3

let play1 = {
    game: "cricket"  
};

let play2 = play1;

play2.game = "football";

console.log("game is - shallow.js:47", play1.game); 
console.log("game is - shallow.js:48", play2.game); 
