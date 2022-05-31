/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = function (words) {
    const VISTING = 1,
        VISITED = 2;

    let vaild = true;
    const edge = new Map();
    const states = new Map();
    const length = words.length;

    for (const word of words) {
        const wordLength = word.length;
        for (let i = 0; i < wordLength; i++) {
            if (!edge.has(word[i])) {
                edge.set(word[i], []);
            }
        }
    }

    const addEdge = (before, after) => {
        const length1 = before.length,
            length2 = after.length;
        const length = Math.min(length1, length2);
        let index = 0;

        while (index < length) {
            if (before[index] !== after[index]) {
                edge.get(before[index]).push(after[index]);
                break;
            }
            index++;
        }

        if (index === length && length1 > length2) {
            vaild = false;
        }
    };

    const dfs = (u) => {
        states.set(u, VISTING);
        const adjacent = edge.get(u);

        for (const v of adjacent) {
            if (!states.has(v)) {
                dfs(v);
                if (!vaild) return;
            } else if (states.get(v) === VISTING) {
                vaild = false;
                return;
            }
        }

        states.set(u, VISITED);
        order[index] = u;
        index--;
    };

    for (let i = 1; i < length; i++) {
        addEdge(words[i - 1], words[i]);
    }

    const order = new Array(edge.size).fill(0);
    let index = edge.size - 1;
    const letterSet = edge.keys();

    for (const letter of letterSet) {
        if (!states.has(letter)) {
            dfs(letter);
        }
    }

    if (!vaild) return "";
    return order.join("");
};
