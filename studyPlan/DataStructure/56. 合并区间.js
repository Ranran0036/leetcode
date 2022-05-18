/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    let res = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let last = res[res.length - 1];
        let cur = intervals[i];

        if (cur[0] <= last[1]) {
            res[res.length - 1][1] = Math.max(last[1], cur[1]);
        } else {
            res.push(cur);
        }
    }

    return res;
};
