/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let res = new Set();

    for (const item of words) {
        let temp = '';
        for (const char of item) {
            temp += morse[char.charCodeAt() - 97];
        }
        res.add(temp);
    }

    return res.size;
};