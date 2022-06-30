function numPrimeArrangements(n: number): number {
    if (n < 3) return 1;
    let mod = 1000000007; // 1e9 + 7
    // 一. 获取有多少个质数
    let primeCount: number = 0; // 质数个数
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primeCount++;
    }
    // 二. 计算非质数个数
    let noPrimeCount: number = n - primeCount; // 非质数个数
    // 三. 获取质数排列组合数
    let a = total(primeCount);
    // 四. 分开乘 非质数总和数
    for (let i = 2; i <= noPrimeCount; i++) {
        a = (a * i) % mod;
    }
    return a;

    /** 辅助函数 */
    // 是否质数
    function isPrime(n: number): boolean {
        for (let i = 2; i <= n / i; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    // 排列组合数 n! =  1 * 2 * 3 * ... * (n - 1) * n
    function total(n: number): number {
        if (n < 3) return n;
        return (total(n - 1) * n) % mod;
    }
}
