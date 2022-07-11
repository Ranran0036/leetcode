function uniquePaths(m: number, n: number): number {
    let ans = 1;
    let less = Math.min(m, n);
    let more = less === m ? n : m;
    for (let x = more, y = 1; y < less; ++x, ++y) {
        ans = Math.floor((ans * x) / y);
    }
    return ans;
}
