/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * 数学公式解法
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    const res = new Array(num_people).fill(0);
    // 求最大的 t 使得 t*(t+1)/2 ≤ candies
    let t = Math.floor((-1 + Math.sqrt(1 + 8 * candies)) / 2);
    // 完整轮数和剩余次数
    let completeRounds = Math.floor(t / num_people);
    let remaining = t % num_people;
    // 每个人在完整轮中获得的糖果之和：
    // (i+1) + (i+1 + num_people) + ... + [i+1 + (completeRounds-1)*num_people]
    for (let i = 0; i < num_people; i++) {
        res[i] = completeRounds * (i + 1) + num_people * ((completeRounds * (completeRounds - 1)) / 2);
        if (i < remaining) {
            res[i] += i + 1 + completeRounds * num_people;
        }
    }
    // 剩余糖果数
    const sumDistributed = (t * (t + 1)) / 2;
    const leftover = candies - sumDistributed;
    if (leftover > 0) {
        res[remaining] += leftover;
    }
    return res;
};
// @lc code=end
