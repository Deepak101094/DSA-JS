/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

*/

function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [ i , j]
            }
        }
    }
}

const result = twoSum([2, 7, 6, 9], 9);
console.log(result);