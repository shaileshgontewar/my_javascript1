// function throttle(func, dely) {
//   let last = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     console.log(now);
//     if (now - last >= dely) {
//       last = now;
//       func.apply(this, args);
//     }
//   };
// }

// throttle(() => {
//   console.log("come ----");
// }, 1000);
// throttle();

// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), delay);
//   };
// }
// const handleSearch = debounce((query) => {
//   console.log("Searching for", query);
// }, 300);

// //   ----------------- -----------

// function firstNon(str) {
//   let charCount = {};
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (charCount[char] === 1) return char;
//   }
//   console.log(charCount);
//   return null;
// }

// console.log(firstNon("massnew"));

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 5 === 0 && i % 3 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// // fizzBuzz(15);

// function longWord(sentance) {
//   let words = sentance.split(" ");
//   let maxLen = 0;
//   let longWord = "";

//   for (let word of words) {
//     if (word.length > maxLen) {
//       maxLen = word.length;
//       longWord = word;
//     }
//   }
//   return longWord;
// }

// console.log(longWord("The quick brown fox jumped over the lazy dog"));

// let arr = [1, 2, 2, 3, 4, 4, 5];
// console.log([...new Set(arr)]);

// let res = arr.filter((value, index, arr) => {
//   return arr.indexOf(value) !== index;
// });

// console.log(res);

// function countOcc(str) {
//   let count = {};
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   return count;
// }

// console.log(countOcc("hello"));

function arrayInter(arr1, arr2) {
  return arr1.filter((ele) => arr2.includes(ele));
}

console.log(arrayInter([1, 2, 3, 4], [3, 4, 5, 6]));

function maxSumOfTwo(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1]
}

console.log(maxSumOfTwo([3, 5, 1, 8, 9]));
