let students = [
  { name: "Riya", marks: 85 },
  { name: "Aman", marks: 42 },
  { name: "Neha", marks: 91 },
  { name: "Karan", marks: 38 },
];

let passedStudents = students.filter((student) => {
  return student.marks >= 50;
});

console.log(passedStudents);

// 2

let words = ["apple", "hi", "banana", "ok", "grape"];

let longWords = words.filter((word) => {
  return word.length > 3;
});

console.log(longWords);

// 3

let ages = [12, 18, 25, 15, 30, 9];

let adults = ages.filter((age) => age >= 18);

console.log(adults);
