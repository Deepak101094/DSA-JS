
function countNegativeNumbers(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            count = count + 1;
        }
    }
    return count;
}

const arr = [1 , -2,  3, -4, -5, 6];
const result = countNegativeNumbers(arr);
console.log(result);
