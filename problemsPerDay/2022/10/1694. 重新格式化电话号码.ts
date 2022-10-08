function reformatNumber(number: string): string {
    let s = "";

    for (let c of number) {
        if (c != " " && c != "-") s += c;
    }

    const n = s.length;

    let ans = "";

    for (let i = 0; i < n; i += 3) {
        if (ans.length != 0) ans += "-";
        if (i + 5 > n) {
            if (i + 3 >= n) ans += s.substring(i);
            else ans += s.substring(i, i + 2) + "-" + s.substring(i + 2);
            break;
        }
        ans += s.substring(i, i + 3);
    }

    return ans;
}
