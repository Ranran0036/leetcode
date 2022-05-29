/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let c1 = "#",
        c2 = "#",
        isChange = false;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (isChange) {
                return false;
            } else if (c1 === "#") {
                c1 = s1[i];
                c2 = s2[i];
            } else {
                if (c1 === s2[i] && c2 === s1[i]) {
                    isChange = true;
                    c2 = "#";
                } else {
                    return false;
                }
            }
        }
    }

    return c2 === "#";
};
