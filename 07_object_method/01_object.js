// object is a data structure use to store related data collection, it stores data as key and value.

// Object

const employee = {
  name: "john",
  age: 45,
  position: "teacher",
};

console.log("employee details => - 01_object.js:11", employee);

console.log(typeof employee);

// object using object constructor

// 1

const manager = new Object();

console.log(typeof manager);

manager.name = "alice";

manager.age = 34;

console.log("manager details - 01_object.js:27", manager);

// 2

const student = new Object();

console.log(typeof student);

student["name"] = "ali";

student["age"] = 12;

console.log("student details - 01_object.js:39", student);

// 3

const employee2 = new Object();

console.log(typeof employee2);

employee2.name = "james";

employee2.age = 23;

console.log("employee2 details - 01_object.js:51", employee2);

