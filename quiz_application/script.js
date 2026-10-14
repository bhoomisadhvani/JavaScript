const quizData = [
  {
    que: "How can you access an object property using a variable key?",
    option: ["obj.key()", "obj[key]", "obj->key", "obj(key)"],
    correctAnswer: 1,
  },
  {
    que: "What is the output of this code? let user = { name: 'Amit' }; console.log(user.city); - script.js:8",
    option: ["Amit", "null", "undefined", "Error"],
    correctAnswer: 2,
  },
  {
    que: "Which keyword is used to check whether a property exists in an object?",
    option: ["exists", "in", "has", "check"],
    correctAnswer: 1,
  },
  {
    que: "What does Object.assign() do?",
    option: [
      "Deletes an object",
      "Copies properties from source objects",
      "Converts an object into a string",
      "Sorts object properties",
    ],
    correctAnswer: 1,
  },
  {
    que: "Which method prevents new properties from being added to an object?",
    option: [
      "Object.freeze()",
      "Object.seal()",
      "Object.preventExtensions()",
      "Object.stop()",
    ],
    correctAnswer: 2,
  },
  {
    que: "What is the output of this code? let obj = { x: 10 }; obj.y = 20; console.log(obj.y); - script.js:38",
    option: ["10", "20", "undefined", "Error"],
    correctAnswer: 1,
  },
  {
    que: "Which loop can be used to iterate over an object's enumerable property keys?",
    option: ["for...in", "do...while", "for...of", "while...of"],
    correctAnswer: 0,
  },
  {
    que: "What does the delete operator do to an object?",
    option: [
      "Deletes the entire object variable",
      "Deletes a specified property",
      "Deletes all object values",
      "Creates a new property",
    ],
    correctAnswer: 1,
  },
  {
    que: "What does Object.hasOwn() check?",
    option: [
      "Whether an object has a specified own property",
      "Whether an object is empty",
      "Whether an object is an array",
      "Whether an object has a method",
    ],
    correctAnswer: 0,
  },
  {
    que: "What is the output of this code? let a = { value: 5 }; let b = a; b.value = 15; console.log(a.value); - script.js:68",
    option: ["5", "15", "undefined", "Error"],
    correctAnswer: 1,
  },
];

const que = document.getElementById("que");

const option = document.getElementById("option");

let index = 0;

que.innerText = quizData[index].que;
