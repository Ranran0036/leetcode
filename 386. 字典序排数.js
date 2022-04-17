/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {
    let res = [];
    let cur = 1;
    for (let i = 1; i <= n; i++) {
        res.push(cur);
        if (cur * 10 <= n) {
            cur *= 10;
        } else {
            while (cur % 10 === 9 || cur + 1 > n) {
                cur = Math.floor(cur / 10);
            }
            cur++;
        }
    }
    return res;
};

console.log(lexicalOrder(13));
