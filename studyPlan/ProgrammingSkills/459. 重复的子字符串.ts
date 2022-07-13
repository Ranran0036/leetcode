function repeatedSubstringPattern(s: string): boolean {
    let n = s.length;
    const fail: number[] = new Array(n).fill(-1);

    for (let i = 1; i < n; i++) {
        let j = fail[i - 1];
        while (j !== -1 && s[i] !== s[j + 1]) {
            j = fail[j];
        }
        if (s[i] === s[j + 1]) {
            fail[i] = j + 1;
        }
    }

    return fail[n - 1] !== -1 && n % (n - fail[n - 1] - 1) === 0;
}
