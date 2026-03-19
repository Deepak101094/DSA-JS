
function sum(n) {
    // base case
    if(n == 2) return 0;

    return n + sum(n - 1);
}

const result = sum(5);
console.log(result);