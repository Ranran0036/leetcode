function makeLargestSpecial(s: string): string {
    const list = new Array<string>();
    for (let i = 0, j = 0, k = 0; i < s.length; i++) {
        k += s[i] == "1" ? 1 : -1;
        if (k == 0) {
            list.push("1" + makeLargestSpecial(s.substring(j + 1, i)) + "0");
            j = i + 1;
        }
    }
    list.sort((a, b) => (b + a).localeCompare(a + b));
    return [...list].join("");
}
