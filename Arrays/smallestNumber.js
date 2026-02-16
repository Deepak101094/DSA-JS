function findSmallestNum(arr) {
    let smallest = Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

const arr = [1, 2, 3 , 0, -1, -2, -3];
const result = findSmallestNum(arr);
console.log(result);