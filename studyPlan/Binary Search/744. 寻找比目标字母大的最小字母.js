/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
    let left = 0,
        right = letters.length - 1;

    if (target >= letters[right]) {
        return letters[0];
    }

    while (left < right) {
        let mid = left + ((right - left) >> 1);

        if (letters[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return letters[left];
};
