/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
    const map = new Map();
    let maxFreq = 0;

    for (const char of s) {
        const freq = (map.get(char) || 0) + 1;
        map.set(char, freq);
        maxFreq = Math.max(maxFreq, freq);
    }

    const buckets = new Array(maxFreq + 1).fill(0).map(() => []);

    for (const [char, freq] of map.entries()) {
        buckets[freq].push(char);
    }

    const res = [];

    for (let i = maxFreq; i >= 0; i--) {
        for (const char of buckets[i]) {
            res.push(char.repeat(i));
        }
    }

    return res.join("");
};
