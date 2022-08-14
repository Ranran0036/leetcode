function maxScore(s: string): number {
    let score = 0;
    const n = s.length;

    if (s[0] === "0") {
        score++;
    }

    for (let i = 1; i < n; i++) {
        if (s[i] === "1") {
            score++;
        }
    }

    let ans = score;
    for (let i = 1; i < n - 1; i++) {
        if (s[i] == "0") {
            score++;
        } else {
            score--;
        }
        ans = Math.max(ans, score);
    }
    return ans;
}
