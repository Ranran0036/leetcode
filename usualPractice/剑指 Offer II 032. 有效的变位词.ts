function isAnagram(s: string, t: string): boolean {
    if (s === t || s.length !== t.length) {
        return false;
    }

    const map: number[] = new Array(26).fill(0);

    for (const char of s) {
        map[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for (const char of t) {
        let index = char.charCodeAt(0) - "a".charCodeAt(0);

        if (--map[index] < 0) {
            return false;
        }
    }

    return true;
}
