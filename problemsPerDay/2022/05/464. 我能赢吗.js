/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
const canIWin = function (maxChoosableInteger, desiredTotal) {
    const memo = new Map();

    const dfs = (maxChoosableInteger, usedNumber, desiredTotal, curTatal) => {
        if (!memo.has(usedNumber)) {
            let result = false;

            for (let i = 0; i < maxChoosableInteger; i++) {
                if (((usedNumber >> i) & 1) === 0) {
                    if (i + 1 + curTatal >= desiredTotal) {
                        result = true;
                        break;
                    }
                    if (
                        !dfs(
                            maxChoosableInteger,
                            usedNumber | (1 << i),
                            desiredTotal,
                            curTatal + i + 1
                        )
                    ) {
                        result = true;
                        break;
                    }
                }
            }

            memo.set(usedNumber, result);
        }

        return memo.get(usedNumber);
    };

    if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
        return false;
    }

    return dfs(maxChoosableInteger, 0, desiredTotal, 0);
};
