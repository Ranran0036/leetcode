/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (const s of salary) {
        min = Math.min(min, s);
        max = Math.max(max, s);
        sum += s;
    }

    return (sum - min - max) / (salary.length - 2);
};
