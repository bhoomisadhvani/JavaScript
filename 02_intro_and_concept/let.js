

// let has block scope it has access only it's block.


function activity() {

  // declaration 

  let activity;

  //initialize 

  activity = "walking";


  console.log("activity : - let.js:17", activity);

  if (true) {
    console.log("activity : - let.js:20", activity);
  }
}

activity();  


function playing() {

  // declaration 

  let game;

  //initialize 

  game = "gta-6";

 console.log("i am playing - let.js:37", game);

  if (true) {

    console.log("i am playing - let.js:41", game);

  }
}
playing();

let game ;

//reinitialize 
 
game = "vice city ";

console.log("i am playing - let.js:53", game);

// redeclaring is not possiable in let it will give reference error 

// redeclare possible but not in the same scope


// 2 //

 
function study() {

  // declaration
  let subject;

  // initialize
  subject = "c++";

  // print
  console.log("Subject : - let.js:72", subject);

  if (true) {
    console.log("block scope: - let.js:75", subject);
  }
}

study();

let bank;

// reinitialize
bank = 5000;

console.log("amount: - let.js:86", bank);


//3 //



function stu_details() {

  // declaration
  let details;

  // initialize
  details = "abc";

  // print
  console.log("student details: - let.js:102", details);

  if (true) {
    console.log("block scope : - let.js:105", details);
  }
}

stu_details();
