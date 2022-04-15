/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    let low = 0,
        high = numbers.length - 1;

    while (low < high) {
        let sum = numbers[low] + numbers[high];
        if (sum === target) {
            return [++low, ++high];
        } else if (sum > target) {
            high--;
        } else {
            low++;
        }
    }

    return [-1, -1];
};
