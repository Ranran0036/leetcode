/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let result = 1;

    for(let i = 0; i < n; i++){
        result = result * 2 * (2 * i + 1) / (i + 2);
    }

    return result;
};
// @lc code=end

