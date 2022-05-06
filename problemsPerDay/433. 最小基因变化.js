/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function (start, end, bank) {
    let queue = [start];
    let visited = new Set();
    let step = 0;
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (cur === end) return step;
            for (let j = 0; j < bank.length; j++) {
                if (visited.has(bank[j])) continue;
                if (isMutation(cur, bank[j])) {
                    queue.push(bank[j]);
                    visited.add(bank[j]);
                }
            }
        }
        step++;
    }
    return -1;
};

const isMutation = (str1, str2) => {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
};
