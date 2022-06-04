/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    let len = candidates.length;
    let ans = [];

    if (len === 0) {
        return ans;
    }

    candidates.sort((a, b) => a - b);

    let path = [];
    dfs(candidates, len, 0, target, path, ans);

    return ans;
};

const dfs = (candidates, len, index, target, path, ans) => {
    if (target === 0) {
        ans.push(path.slice());
        return;
    }

    for (let i = index; i < len; i++) {
        if (target - candidates[i] < 0) {
            break;
        }

        if (i > index && candidates[i] === candidates[i - 1]) {
            continue;
        }

        path.push(candidates[i]);
        dfs(candidates, len, i + 1, target - candidates[i], path, ans);
        path.pop();
    }
};
