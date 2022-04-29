/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    let result = [];
    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            result.push([1]);
        } else if (i === 2) {
            result.push([1, 1]);
        } else {
            let temp = new Array(i).fill(0).map((_, index) => {
                return (
                    result[i - 2].getDefault(index - 1, 0) +
                    result[i - 2].getDefault(index, 0)
                );
            });

            result.push(temp);
        }
    }

    return result;
};

Array.prototype.getDefault = function (index, defaultValue) {
    return this[index] || defaultValue;
};
