const arr = [5, 3, 2, 1, 10];

function sum(n) {
   let isOdd = arr[n] %2 != 0;

   if(n == 0) {
    return isOdd ? arr[n] : 0;
   }

   return isOdd ? arr[n] : 0 + sum(n -1);
}

const result = sum(arr.length -1);
console.log(result);