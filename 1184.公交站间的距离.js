/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function (distance, start, destination) {
    if (start === destination) return 0;
    //保证start在destination前面
    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let clockwiseDistance = 0;
    let antiClockwiseDistance = 0;

    for (let i = 0; i < distance.length; i++) {
        if (i >= start && i < destination) {
            clockwiseDistance += distance[i];
        } else {
            antiClockwiseDistance += distance[i];
        }
    }

    return Math.min(clockwiseDistance, antiClockwiseDistance);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
// @lc code=end
