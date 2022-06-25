function lastRemaining(n: number, m: number): number {
    let f = 0;

    for (let i = 2; i != n + 1; i++) {
        f = (f + m) % i;
    }

    return f;
}
