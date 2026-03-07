/* leetcode problem -
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. */

function removeDuplicate(arr) {
 let x = 0; // x will be point to position where we need to add unique element
 // i will be point to the unique element from the arrary

 for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[x]) {
        x = x + 1;
        arr[x] = arr[i];
    }
 }
 return x + 1;
}

const arr = [0, 1, 1, 1, 2, 2, 3, 3, 4]
const result = removeDuplicate(arr);
console.log(result);