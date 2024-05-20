function longestAwesome(s: string): number {
    const prefix: Map<number, number> = new Map([[0, -1]]);
    let ans = 0;
    let sequence = 0;
    for (let j = 0; j < s.length; ++j) {
        const digit = parseInt(s[j]);
        sequence ^= 1 << digit;
        if (prefix.has(sequence)) {
            ans = Math.max(ans, j - prefix.get(sequence)!);
        } else {
            prefix.set(sequence, j);
        }
        for (let k = 0; k < 10; ++k) {
            if (prefix.has(sequence ^ (1 << k))) {
                ans = Math.max(ans, j - prefix.get(sequence ^ (1 << k))!);
            }
        }
    }
    return ans;
}
