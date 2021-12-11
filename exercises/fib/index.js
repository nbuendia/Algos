// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let fibArr = [0, 1];
//     if (n === 1) return 1;

//     for (let i = fibArr.length; i <= n; i++) {
//         let secondToLast = fibArr[fibArr.length - 2];
//         let last = fibArr[fibArr.length - 1];
//         fibArr[i] = secondToLast + last;
//     }

//     return fibArr[n];
// }

//RECURSIVE
function fib(n) {
    if (n < 2) return n;
    return fib(n - 2) + fib(n - 1);
}

module.exports = fib;
