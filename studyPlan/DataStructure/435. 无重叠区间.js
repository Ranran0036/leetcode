/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
    if (intervals.length < 2) {
        return 0;
    }

    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let last = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= last) {
            last = intervals[i][1];
        } else {
            count++;
        }
    }

    return count;
};
