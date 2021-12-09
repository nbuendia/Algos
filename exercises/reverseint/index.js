// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     const reversedNum = Math.abs(n).toString().split('').reverse();
//     if (n <= 9 && n >= 0) return n;
//     if (n < 0) return Number(reversedNum.join('')) * -1;
//     return Number(reversedNum.join(''));
// }

//TERNARY
function reverseInt(n) {
    const reversedNum = Math.abs(n).toString().split('').reverse();
    return (n <= 9 && n >= 0) ? n 
         : (n < 0) ? Number(reversedNum.join('')) * -1 
         : Number(reversedNum.join(''));
}

module.exports = reverseInt;
