/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
    let ans = [];
    subsetsHelper(nums, 0, ans, []);
    return ans;
};

const subsetsHelper = function (nums, index, ans, path) {
    if (index === nums.length) {
        ans.push(path);
        return;
    }

    let no = path;
    subsetsHelper(nums, index + 1, ans, no);

    let yes = path.concat(nums[index]);
    subsetsHelper(nums, index + 1, ans, yes);
};
