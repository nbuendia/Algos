// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//FUNCTION 1
function steps(n) {
    let poundArr = [];
    let spaceCount = 1;

    for (let i = 0; i < n; i++) poundArr[i] = Array(n).fill('#');

    poundArr.map((arr) => {
        console.log(arr.fill(' ', spaceCount).join(''));
        spaceCount++;
    });
}

//FUNCTION 2
// function steps(n) {
//     let poundArr = [];
//     let spaceArr = [];

//     for (let i = 0; i < n; i++) poundArr[i] = Array(i + 1).fill('#');
//     for (let i = 0; i <= n - 2; i++) spaceArr[i] = Array(i + 1).fill(' ');
//     spaceArr.reverse();

//     for (let i = 0; i <= n - 1; i++) {
//         if (i === n - 1) console.log(poundArr[i].join(''));
//         else console.log(poundArr[i].concat(spaceArr[i]).join(''));
//     }

// }

module.exports = steps;
