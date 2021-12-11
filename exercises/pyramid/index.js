// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let pyramid = [];
    let spaces = [];
    let pounds = [];
    let poundCount = 1;

    for (let i = 0; i < n - 1; i ++) spaces[i] = Array(i + 1).fill(' ');
    for (let i = 0; i < n; i++) { 
        pounds[i] = Array(i + poundCount).fill('#');
        poundCount++;
    }

    spaces.reverse();

    for (let i = 0; i < n; i++) {
        if (i === n - 1) pyramid[i] = pounds[i];
        else pyramid[i] = spaces[i].concat(pounds[i]);
    }

    for (let i = 0; i <= n - 1; i++) {
        if (i === n - 1) console.log(pyramid[i].join(''));
        else {
            pyramid[i].push(...spaces[i]);
            console.log(pyramid[i].join(''))
        }
    }
}

module.exports = pyramid;
