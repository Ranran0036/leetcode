function firstUniqChar(s: string): number {
    const map: number[] = new Array(26).fill(0);

    for (const char of s) {
        map[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s.charCodeAt(i) - 97] === 1) {
            return i;
        }
    }

    return -1;
}
