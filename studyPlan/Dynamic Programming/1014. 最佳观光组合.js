/**
 * @param {number[]} values
 * @return {number}
 */
const maxScoreSightseeingPair = function (values) {
    let ans = 0,
        max = values[0] + 0;

    for (let i = 1; i < values.length; i++) {
        ans = Math.max(ans, max + values[i] - i);
        max = Math.max(max, values[i] + i);
    }

    return ans;
};
