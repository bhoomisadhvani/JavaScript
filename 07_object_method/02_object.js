const employee = {
  name: "john",
  age: 45,
  position: "teacher",
};

console.log("employee details =>  01_object.js:11 - 02_object.js:7", employee);

// aceesing values using . notation

console.log("employee name - 02_object.js:11", employee.name);
console.log("employee position - 02_object.js:12", employee.position);

// accesing values using []

console.log("employee age - 02_object.js:16", employee["age"]);
console.log("employee name - 02_object.js:17", employee["name"]);

// modify object using . notation

employee.name = "james";

console.log("employee name - 02_object.js:23", employee.name);

employee.position = "principal";

console.log("employee position - 02_object.js:27", employee.position);

// using []

employee["age"] = 56;

console.log("employee age - 02_object.js:33", employee["age"]);

employee["name"] = "robert";

console.log("employee name - 02_object.js:37", employee["name"]);

// adding properties using . notation

employee.salary = 50000;

console.log("employee details - 02_object.js:43", employee);

employee.city = "delhi";

console.log("employee details - 02_object.js:47", employee);

// using []

employee["email"] = "john@gamil.com";

console.log("employee details - 02_object.js:53", employee);

employee["phone"] = "9876543210";

console.log("employee details - 02_object.js:57", employee);
