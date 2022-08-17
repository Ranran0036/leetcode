function replaceDigits(s: string): string {
    let ans = s.split("");

    for (let i = 1; i < ans.length; i += 2) {
        let charNum = ans[i - 1].charCodeAt(0) + Number(ans[i]);
        ans[i] = String.fromCharCode(charNum);
    }

    return ans.join("");
}
