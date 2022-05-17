const ZERO = "0".charCodeAt(0),
    NINE = "9".charCodeAt(0);
/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function (logs) {
    logs.sort((a, b) => {
        const aDig =
                a.charCodeAt(a.length - 1) >= ZERO &&
                a.charCodeAt(a.length - 1) <= NINE,
            bDig =
                b.charCodeAt(b.length - 1) >= ZERO &&
                b.charCodeAt(b.length - 1) <= NINE;
        if (aDig && bDig) return 0;
        else if (aDig) return 1;
        else if (bDig) return -1;
        const aSp = a.split(" "),
            bSp = b.split(" ");
        const cmp = aSp
            .slice(1)
            .join(" ")
            .localeCompare(bSp.slice(1).join(" "));
        if (cmp != 0) return cmp;
        return aSp[0].localeCompare(bSp[0]);
    });
    return logs;
};
