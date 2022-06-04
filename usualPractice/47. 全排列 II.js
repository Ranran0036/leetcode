/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
    const ans = [];
    const used = new Array(nums.length).fill(false);

    const backtrack = (index, perm) => {
        if (index === nums.length) {
            ans.push(perm.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue;
            }

            perm.push(nums[i]);
            used[i] = true;
            backtrack(index + 1, perm);
            used[i] = false;
            perm.pop();
        }
    };

    nums.sort((a, b) => a - b);
    backtrack(0, []);

    return ans;
};
