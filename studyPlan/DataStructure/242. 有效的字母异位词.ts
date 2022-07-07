function isAnagram(s: string, t: string): boolean {
    const map: number[] = new Array(26).fill(0);

    for (const char of s) {
        map[char.charCodeAt(0) - 97]++;
    }

    for (const char of t) {
        map[char.charCodeAt(0) - 97]--;
    }

    for (const count of map) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}
