
function findSecondLargestNum (arr) {
    let firstLargestNum = -Infinity;
    let secondLargestNum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargestNum) {
            secondLargestNum = firstLargestNum;
            firstLargestNum = arr[i];
        } else if (arr[i] > secondLargestNum && arr[i] != firstLargestNum) {
            secondLargestNum = arr[i]
        }
    }
    return secondLargestNum;
}

const arr = [10, 8, 9, 20, 7, 25, 15, 30, 28, 35, 35];
const result = findSecondLargestNum(arr);
console.log(result);