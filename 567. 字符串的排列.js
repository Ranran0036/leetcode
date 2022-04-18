/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let arrS1 = new Array(26).fill(0);
    let arrS2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        arrS1[s1.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s2.length; i++) {
        arrS2[s2.charCodeAt(i) - 97]++;
        if (i >= s1.length - 1) {
            if (isEqual(arrS1, arrS2)) {
                return true;
            } else {
                arrS2[s2.charCodeAt(i - s1.length + 1) - 97]--;
            }
        }
    }

    return false;
};

const isEqual = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

console.log(checkInclusion("ab", "eidbaooo"));
