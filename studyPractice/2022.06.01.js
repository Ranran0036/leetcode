const allSubstring = (str) => {
    const ans = [];

    //从窗口大小循环
    for (let i = 0; i < str.length; i++) {
        let left = 0,
            right = left + i;
        while (right < str.length) {
            ans.push(str.substring(left, right + 1));
            left++;
            right++;
        }
    }

    return ans;
};

const allSuubequence = (str) => {
    const ans = [];
    allSubequenceHelper(str, 0, ans, "");
    return ans;
};

const allUniqueSubsequence = (str) => {
    const ans = new Set();
    allUniqueSubsequenceHelper(str, 0, ans, "");
    return [...ans];
};

const allUniqueSubsequenceHelper = (str, index, ans, path) => {
    if (index === str.length) {
        ans.add(path);
        return;
    }

    allUniqueSubsequenceHelper(str, index + 1, ans, path);
    allUniqueSubsequenceHelper(str, index + 1, ans, path + str[index]);
};

//深度优先搜索
const allSubequenceHelper = (str, index, ans, path) => {
    if (index === str.length) {
        ans.push(path);
        return;
    }

    let no = path;
    allSubequenceHelper(str, index + 1, ans, no);

    let yes = path + str[index];
    allSubequenceHelper(str, index + 1, ans, yes);
};

console.log(allSubstring("abcdefg"));
console.log(allSuubequence("abc"));
console.log(allSuubequence("aaca"));
console.log(allUniqueSubsequence("aaca"));

//----------------------------------------------------------------------------------------------------------------------

/**
 * 字符串（数组）全排列
 * @param {string} str
 * @returns {string[]}
 */
const allPermutation = (str) => {
    const ans = [];
    str = str.split("");
    allPermutationHelper(str, 0, ans);
    return ans;
};

const allPermutationHelper = (str, index, ans) => {
    if (index === str.length) {
        ans.push(str.join(""));
        return;
    }

    for (let i = index; i < str.length; i++) {
        [str[i], str[index]] = [str[index], str[i]];
        allPermutationHelper(str, index + 1, ans);
        [str[i], str[index]] = [str[index], str[i]];
    }
};

console.log(allPermutation("abc"));
