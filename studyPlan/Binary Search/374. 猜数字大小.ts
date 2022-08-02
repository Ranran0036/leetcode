const target = Math.floor(Math.random() * 100) + 1;

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
function guess(num: number): number {
    if (num < target) {
        return -1;
    } else if (num > target) {
        return 1;
    } else {
        return 0;
    }
}

function guessNumber(n: number): number {
    let low = 1;
    let high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res === -1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
