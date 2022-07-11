function characterReplacement(s: string, k: number): number {
    const ary: number[] = new Array(26).fill(0);
    const l: number = s.length;
    let max: number = 0,
        right: number = 0,
        left: number = 0;
    while (right < l) {
        ary[s[right].charCodeAt(0) - "A".charCodeAt(0)]++;
        max = Math.max(max, ary[s[right].charCodeAt(0) - "A".charCodeAt(0)]);
        if (right - left + 1 - max > k) {
            ary[s[left].charCodeAt(0) - "A".charCodeAt(0)]--;
            left++;
        }
        right++;
    }
    return right - left;
}
