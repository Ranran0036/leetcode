/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    const next = getNext(needle);

    let i = 0;
    let j = 0;

    while (i < haystack.length) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (haystack[i] === needle[j]) {
            j++;
        }

        if (j === needle.length) {
            return i - needle.length + 1;
        }

        i++;
    }

    return -1;
};

const getNext = (needle) => {
    const next = new Array(needle.length).fill(0);
    for (let i = 1, j = 0; i < needle.length; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (needle[i] === needle[j]) {
            j++;
        }
        next[i] = j;
    }

    return next;
};
