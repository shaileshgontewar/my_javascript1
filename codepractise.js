const arr = ["1", "3", "7", "5", "1", "1", "4", "7", "3", "7", "5"];

const occurance = {};
for (let i = 0; i < arr.length; i++) {
  if (occurance[arr[i]]) {
    occurance[arr[i]]++;
  } else {
    occurance[arr[i]] = 1;
  }
}

// for(let key in occurance){
//     console.log(`"${key}" occurs ${occurance[key]} time${occurance[key] > 1 ? 's' : ''}`)
// }

// console.log(occurance)

// Write a Javascript function that removes the duplicate elements from the array.

const arr2 = ["a", "b", "b", "c", "d", "d", "a"];

const unique = [];
for (let i = 0; i < arr2.length; i++) {
  const element = arr2[i];
  let isDuplicate = false;
  for (let j = 0; j < unique.length; j++) {
    if (unique[j] === element) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    unique.push(element);
  }
}
console.log(unique, "unique");
