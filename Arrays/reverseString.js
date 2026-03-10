// Write a function that reverses a string. The input string is given as an array of characters s.

function reverseString(s) {
    let len = s.length;
    let halfLeg = Math.floor(len/2);
    for(let i = 0; i < halfLeg; i++) {
        let temp = s[i];
        s[i] = s[len - 1 -i];
        s[len - 1 - i] = temp;
    }
    return s;
}

const result = reverseString(["h", "e", "l", "l", "o"]) // output = ["o", "l", "l", "e", "h"];
console.log(result);