/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }

    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };

    const need = [];

    for (const digit of digits) {
        need.push(map[digit]);
    }

    const result = [];

    letterCombinationsHelper(need, 0, [], result);

    return result;
};

const letterCombinationsHelper = function (need, index, path, result) {
    if (index === need.length) {
        result.push(path.join(""));
        return;
    }

    for (const letter of need[index]) {
        path.push(letter);
        letterCombinationsHelper(need, index + 1, path, result);
        path.pop();
    }
};
