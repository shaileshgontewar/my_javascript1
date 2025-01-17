function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello Worlsd"));
function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
// console.log(firstNonRepeatingChar("swiss"));
let str1 = "silent";
let str2 = "listen";
// console.log(str1.split("").sort().join(""));
// console.log(str2.split("").sort().join(""));

function countChar(str) {
  const count = {};
  for (let char of str) {
    if (char !== " ") {
      count[char] = count[char] ? count[char] + 1 : 1;
    }
  }
  return count;
}
// console.log(countChar("javas cript"));

let fruites = ["apple", "orange", "banana", "apple"];

function countfruit(fruit) {
  const count = {};
  for (let char of fruit) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  return count;
}

console.log(countfruit(fruites));

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  return words.reduce((prev, curr) => {
    return curr.length > prev.length ? curr : prev;
  }, "");
}

// console.log(findLongestWord("JavaScript is awesome"));

let peoples = [
  { name: "Shailesh", gender: "male" },
  { name: "pranay", gender: "male" },
  { name: "samiksha", gender: "female" },
];

let result = peoples.reduce((acc, curr) => {
  let gender = curr.gender;
  if (!acc[gender]) {
    acc[gender] = [];
  }
  acc[gender].push(curr);
  return acc;
}, {});

// console.log(result);
