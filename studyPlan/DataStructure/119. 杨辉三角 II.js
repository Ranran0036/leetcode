/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    const row = [1];

    let i = 1;

    while (i <= rowIndex) {
        row.push((row[i - 1] * (rowIndex - i + 1)) / i);
        i++;
    }

    return row;
};
