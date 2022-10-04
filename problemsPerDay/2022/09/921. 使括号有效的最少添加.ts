function minAddToMakeValid(s: string): number {
    let leftCount = 0;
    let ans = 0;

    for (const char of s) {
        if (char === "(") {
            leftCount++;
        } else {
            if (leftCount > 0) {
                leftCount--;
            } else {
                ans++;
            }
        }
    }

    ans += leftCount;

    return ans;
}
