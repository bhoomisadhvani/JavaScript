
let temperaturesInCelsius = [0, 20, 30, 37, 100];

let temperaturesInFahrenheit = temperaturesInCelsius.map((celsius) => {
  return (celsius * 9/5) + 32;
});

console.log(temperaturesInFahrenheit);

let students = [
  { name: "Riya", marks: 85 },
  { name: "Aman", marks: 42 },
  { name: "Neha", marks: 91 }
];

let results = students.map((student) => {
  return student.marks >= 50 ? "Pass" : "Fail";
});

console.log(results);