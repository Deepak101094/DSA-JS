// Return sum of all odd numbers.

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
