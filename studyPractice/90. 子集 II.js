/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);

    let t = [],
        ans = [];

    const dfs = (choosePre, cur, nums) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }

        dfs(false, cur + 1, nums);

        if (!choosePre && cur > 0 && nums[cur] === nums[cur - 1]) {
            return;
        }

        t.push(nums[cur]);

        dfs(true, cur + 1, nums);

        t = t.slice(0, t.length - 1);
    };

    dfs(false, 0, nums);

    return ans;
};

console.log(subsetsWithDup([1, 2, 2]));
debugger;
