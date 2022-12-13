const MOD = 1000000007;
function sumSubarrayMins(arr: number[]): number {
    let n = arr.length,
        ans = 0;

    const l = new Array<number>(n).fill(-1),
        r = new Array<number>(n).fill(n);

    const stk = new Array<number>(n).fill(0);

    let he = 0,
        ta = 0;

    for (let i = 0; i < n; i++) {
        while (he < ta && arr[stk[ta - 1]] >= arr[i]) r[stk[--ta]] = i;
        stk[ta++] = i;
    }

    he = ta = 0;

    for (let i = n - 1; i >= 0; i--) {
        while (he < ta && arr[stk[ta - 1]] > arr[i]) l[stk[--ta]] = i;
        stk[ta++] = i;
    }

    for (let i = 0; i < n; i++) {
        const a = i - l[i],
            b = r[i] - i;
        ans += (((a * b) % MOD) * arr[i]) % MOD;
        ans %= MOD;
    }

    return ans;
}
