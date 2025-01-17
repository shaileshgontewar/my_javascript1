// console.log("shailesh !");

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eyecolor;
}
Person.prototype.getName = function () {
  return this.firstName + " " + this.lastName;
};
const result = new Person("Shailesh", "Gontewar", 26, "Black");
const result1 = new Person("Shivam", "Khandar", 26, "Black");
// console.log(result);
// console.log(result1);
// console.log(result.getName());
let txt = "";
for (let x in result) {
  txt = result[x];
  console.log(txt)
}

console.log(txt);
