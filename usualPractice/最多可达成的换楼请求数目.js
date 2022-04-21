/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
let maximumRequests = function(n, requests) {
    const delta = new Array(n).fill(0);
    let ans = 0, m = requests.length;
    for (let mask = 0; mask < (1 << m); ++mask) {
        let cnt = mask.toString(2).split('0').join('').length;
        if (cnt <= ans) {
            continue;
        }
        delta.fill(0);
        for (let i = 0; i < m; ++i) {
            if ((mask & (1 << i)) !== 0) {
                ++delta[requests[i][0]];
                --delta[requests[i][1]];
            }
        }
        let flag = true;
        for (const x of delta) {
            if (x !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            ans = cnt;
        }
    }
    return ans;
};

console.log(maximumRequests(5, [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]))