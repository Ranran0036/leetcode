/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
    const max = Math.max(...heights);
    const countSort = new Array(max + 1).fill(0);

    for (const height of heights) {
        countSort[height]++;
    }

    let count = 0,
        idx = 0;
    for (let i = 1; i <= max; i++) {
        for (let j = 1; j <= countSort[i]; j++) {
            if (heights[idx] !== i) {
                count++;
            }
            idx++;
        }
    }

    return count;
};
