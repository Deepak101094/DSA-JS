// Return sum of all odd numbers.
const arr = [10, 8, 9, 20, 7, 25, 15, 30, 28, 35, 35];

function oddSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i]
    }
  }
  return sum;
}
const result = oddSum(arr);
console.log(result);


// Return index of first number divisible by both 2 and 5.
function findIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      return i
    }
  }
  return -1;
}

console.log(findIndex(arr));