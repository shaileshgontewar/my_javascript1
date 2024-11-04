let nu = Math.random();

console.log(Math.floor(Math.random() * 20));

const fruits = new Map([
  ["apple", 500],
  ["orange", 200],
  ["banana", 100],
]);

console.log(fruits);

let text = " ";

fruits.forEach((value, key) => {
  text += key + " = " + value + "<br/>";
});

document.getElementById("demo").innerHTML = text;

let array = [];
let object = {};

console.log(typeof object);

const students = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  // ...other student objects
];

const searchQuery = "3"; // The search query you want to apply
const filteredStudents = students.filter((student) => {
  // Create a regex pattern with the search query and the 'i' flag for case-insensitivity
  const regexPattern = new RegExp(searchQuery, "i");

  // Check if any of the student properties match the regex pattern
  return Object.values(student).some((value) => regexPattern.test(value));
});

console.log(filteredStudents);

let obj1={
  name:"shailesh"
}


let obj2=obj1
obj2.name="master"



console.log(obj1)
console.log(obj2)

let p1="shailesh"
let p2=p1
 p2="master"
console.log(p1)
console.log(p2)
