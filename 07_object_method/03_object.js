const employee = {
  name: "john",
  age: 45,
  position: "teacher",
};

console.log(
  "employee details =>  01_object.js:11  02_object.js:7",
  employee,
);

console.log(employee.name);

// destructing

const { name } = employee;

console.log(name);

// creating object using function constructor

function employee1(name, age, position) {
  ((this.name = name), (this.age = age), (this.position = position));
}

const employee2 = new employee1("abc", 23, "teacher");

const employee3 = new employee1("xyz", 34, "teacher");

const employee4 = new employee1("pqr", 44, "teacher");

console.log("employee1 - 03_object.js:32", employee1);

console.log("employee3 - 03_object.js:34", employee3);

console.log("employee4 - 03_object.js:36", employee4);

// adding properties

employee1.prototype.salary = 50000;

console.log("employee salary - 03_object.js:42", employee2.salary);

// remove property

delete employee2.salary;

console.log(employee2);

// hasownproperty

console.log(
  "employee2 hasOwnProperty name",
  employee2.hasOwnProperty("name"),
);

console.log(
  "employee2 hasOwnProperty age",
  employee2.hasOwnProperty("age"),
);

console.log(
  "employee2 hasOwnProperty position",
  employee2.hasOwnProperty("salary"),
);

// for in loop

for (let key in employee) {
  console.log(key, employee[key]);
}
