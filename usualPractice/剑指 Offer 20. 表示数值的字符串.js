/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
    const states = [
        new Map([
            [" ", 0],
            ["s", 1],
            ["d", 2],
            [".", 4],
        ]),
        new Map([
            ["d", 2],
            [".", 4],
        ]),
        new Map([
            ["d", 2],
            [".", 3],
            ["e", 5],
            [" ", 8],
        ]),
        new Map([
            ["d", 3],
            ["e", 5],
            [" ", 8],
        ]),
        new Map([["d", 3]]),
        new Map([
            ["s", 6],
            ["d", 7],
        ]),
        new Map([["d", 7]]),
        new Map([
            ["d", 7],
            [" ", 8],
        ]),
        new Map([[" ", 8]]),
    ];

    let state = 0;
    let t = "";

    for (const char of s) {
        if (char >= "0" && char <= "9") {
            t = "d";
        } else if (char === "+" || char === "-") {
            t = "s";
        } else if (char === "e" || char === "E") {
            t = "e";
        } else if (char === "." || char === " ") {
            t = char;
        } else {
            t = "?";
        }

        if (!states[state].has(t)) {
            return false;
        }

        state = states[state].get(t);
    }

    return state === 2 || state === 3 || state === 7 || state === 8;
};
