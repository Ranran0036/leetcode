/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    const ans = [];
    const backtrack = (index, cur, sum) => {
        if (sum >= target) {
            if (sum === target) {
                ans.push(cur.slice());
            }
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            cur.push(candidates[i]);
            backtrack(i, cur, sum + candidates[i]);
            cur.pop();
        }
    };

    candidates.sort((a, b) => a - b);
    backtrack(0, [], 0);

    return ans;
};
