/* leetcode problem -
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. */


function removeElements(arr, val) {
 let x = 0; // x will maintain the position where we need to shift the next element
 for(let i = 0; i < arr.length; i++) {
    // shift elements to left if is not equal to val
    if(arr[i] !== val) {
        arr[x] = arr[i];
        x = x + 1;
    }
 }
 return x;
}

const arr = [3,2,2,3]
const val = 3;
const result  = removeElements(arr, val);
console.log(result);