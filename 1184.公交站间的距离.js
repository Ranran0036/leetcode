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
    //保证start在destination前面
    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let clockwiseArr = distance.slice(start, destination);
    let antiClockwiseArr = distance
        .slice(destination)
        .concat(distance.slice(0, start));

    let clockwiseDistance = clockwiseArr.reduce((acc, cur) => acc + cur, 0);
    let antiClockwiseDistance = antiClockwiseArr.reduce(
        (acc, cur) => acc + cur,
        0
    );

    return Math.min(clockwiseDistance, antiClockwiseDistance);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
// @lc code=end
