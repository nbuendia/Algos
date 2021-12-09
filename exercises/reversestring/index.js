// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//FUNCTION
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

//EXPRESSION
const reverse = (str) => str.split('').reverse().join('');

module.exports = reverse;
