function longestCommonPrefix(strs: string[]): string {
    if (strs === null || strs.length === 0) {
        return "";
    }

    let len = strs[0].length;
    let count = strs.length;

    for (let i = 0; i < len; i++) {
        let c = strs[0][i];

        for (let j = 1; j < count; j++) {
            if (i === strs[j].length || strs[j][i] !== c) {
                return strs[0].substring(0, i);
            }
        }
    }

    return strs[0];
}
