/* 
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

function maxConsecutiveOnes(arr) {
    let curCount = 0;
    let maxCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 1) {
            curCount++;
        }else {
            maxCount = Math.max(curCount, maxCount);
            curCount = 0;
        }
    }
    return Math.max(maxCount, curCount);
}

const result = maxConsecutiveOnes([1, 0 , 1, 1, 0 , 1, 1, 1]);
console.log(result);