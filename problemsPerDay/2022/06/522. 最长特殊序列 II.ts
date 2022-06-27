function findLUSlength(strs: string[]): number {
    strs.sort((a, b) => b.length - a.length);

    for (let i = 0; i < strs.length; i++) {
        if (!isSubSeqOfAnother(strs, i)) {
            return strs[i].length;
        }
    }

    return -1;
}

function isSubSeqOfAnother(strs: string[], idx: number): boolean {
    for (let i = 0; i < strs.length; i++) {
        if (i === idx) {
            continue;
        }
        if (strs[i].length < strs[idx].length) {
            break;
        }
        if (isSubSeq(strs[idx], strs[i])) {
            return true;
        }
    }

    return false;
}

function isSubSeq(s1: string, s2: string): boolean {
    let p1 = 0;
    let p2 = 0;

    while (p1 < s1.length && p2 < s2.length) {
        while (p2 < s2.length && s1[p1] !== s2[p2]) {
            p2++;
        }

        if (p2 < s2.length) {
            p1++;
        }

        p2++;
    }

    return p1 === s1.length;
}
