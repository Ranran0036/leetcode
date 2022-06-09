/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function (nums) {
    return nums
        .sort((a, b) => {
            const stra = a + "";
            const strb = b + "";
            return stra + strb - (strb + stra);
        })
        .join("");
};
