// creating class using class constructor

class employee {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

// 1

const employee1 = new employee("alice", 23, "teacher");

console.log("employee1 - 04_object.js:15",employee1)

// 2

const employee2 = new employee("john", 43, "ui/ux");

console.log("employee2 - 04_object.js:21",employee2)

// 3

const employee3 = new employee("james", 34, "fsd");

console.log("employee3 - 04_object.js:27",employee3)

// merging

const student={
    name:"john",
    age:12,
    class:8,
};

const allDetails={...employee1,...student};
console.log("All Details - 04_object.js:38",allDetails)

console.log("allDetails length=> - 04_object.js:40", Object.keys(allDetails).length);
