/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const magzineMap = new Map();

    for (let i = 0; i < magazine.length; i++) {
        if (magzineMap.has(magazine[i])) {
            magzineMap.set(magazine[i], magzineMap.get(magazine[i]) + 1);
        } else {
            magzineMap.set(magazine[i], 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!magzineMap.has(ransomNote[i])) {
            return false;
        } else {
            if (magzineMap.get(ransomNote[i]) === 0) {
                return false;
            } else {
                magzineMap.set(
                    ransomNote[i],
                    magzineMap.get(ransomNote[i]) - 1
                );
            }
        }
    }

    return true;
};
