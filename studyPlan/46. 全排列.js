/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    let ans = [];

    function dfs(nums, path) {
        if (path.length === nums.length) {
            ans.push(path);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (path.indexOf(nums[i]) !== -1) {
                continue;
            }

            dfs(nums, path.concat(nums[i]));
        }
    }

    dfs(nums, []);

    return ans;
};
