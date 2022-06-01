/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = function (matchsticks) {
    const totalLen = matchsticks.reduce((a, b) => a + b, 0);
    if (totalLen % 4 !== 0) {
        return false;
    }

    const len = Math.floor(totalLen / 4),
        matchsticksLen = matchsticks.length;
    const dp = new Array(1 << matchsticksLen).fill(-1);
    dp[0] = 0;

    for (let i = 1; i < 1 << matchsticksLen; i++) {
        for (let j = 0; j < matchsticksLen; j++) {
            if ((i & (1 << j)) === 0) {
                continue;
            }
            const i1 = i & ~(1 << j);
            if (dp[i1] >= 0 && dp[i1] + matchsticks[j] <= len) {
                dp[i] = (dp[i1] + matchsticks[j]) % len;
                break;
            }
        }
    }

    return dp[(1 << matchsticksLen) - 1] === 0;
};
