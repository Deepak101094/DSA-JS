// print the number from 1 to n

function print(x) {
    let n = 10;
    //base case
    if(x > n) {
        return;
    }
    console.log(x);
    x++;
    print(x);
}

print(1);    