/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/
const arr = [4, 0, 2, 1, 5];

// 1st solution but not optimize 
function singleNumber(arr) {
    let has = {};

    for(let i = 0; i < arr.length; i++) {
        if(!has[nums[i]]){
          has[nums[i]] = 1
        } else {
           has[nums[i]]++;
        }       
    }
    for(let i = 0; i < arr.length; i++) {
        if(has[nums[i]] == 1) {
            return nums[i];
        }
    }
}

//2nd solution with optimize
function singleNumber2(arr) {
 let result = 0;
//  Same bits → 0
// Different bits → 1
 for(let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];
 }
 return result;
}