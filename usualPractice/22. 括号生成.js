/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    let cache = [];

    const generateParenthesisHelper = function (n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }

        const ans = [];

        if (n === 0) {
            ans.push("");
        } else {
            for (let c = 0; c < n; c++) {
                const left = generateParenthesisHelper(c);
                const right = generateParenthesisHelper(n - 1 - c);

                for (let l of left) {
                    for (let r of right) {
                        ans.push(`(${l})${r}`);
                    }
                }
            }
        }

        cache[n] = ans;

        return ans;
    };

    return generateParenthesisHelper(n);
};
