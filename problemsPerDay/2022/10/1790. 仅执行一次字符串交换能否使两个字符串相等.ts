function areAlmostEqual(s1: string, s2: string): boolean {
    let map: number[] = new Array(26).fill(0);
    const diff: number[] = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (diff.length >= 2) {
                return false;
            }

            diff.push(i);
        }
    }

    if (diff.length === 0) {
        return true;
    }

    if (diff.length === 1) {
        return false;
    }

    return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
}
