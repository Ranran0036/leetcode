function rotatedDigits(n: number): number {
    let ans = 0;
    out: for (let i = 1; i <= n; i++) {
        let ok = false;
        let x = i;
        while (x != 0) {
            const t = x % 10;
            x = Math.floor(x / 10);
            if (t == 2 || t == 5 || t == 6 || t == 9) {
                ok = true;
            } else if (t != 0 && t != 1 && t != 8) {
                continue out;
            }
        }
        if (ok) {
            ans++;
        }
    }
    return ans;
}
