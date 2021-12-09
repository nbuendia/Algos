// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    if (str.length === 1) return str; 
    const charObj = {};

    for(let i = 0; i < str.length; i++) {
        let result = Object.keys(charObj).find(char => char === str[i]);
        if (!!result) {
            charObj[str[i]]++;
        } else {
            charObj[str[i]] = 1;
        }
    }

    const idx = Object.values(charObj).findIndex(value => 
        value === Math.max(...Object.values(charObj)));

    return Object.keys(charObj)[idx];
}

module.exports = maxChar;
