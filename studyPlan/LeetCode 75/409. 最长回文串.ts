function longestPalindrome(s: string): number {
    //用个集合来记录字符是否出现过
    const charSet: Set<string> = new Set<string>();
    let ans: number = 0;

    for (const key of s) {
        if (charSet.has(key)) {
            //如果出现过，则将其移除 并将ans加2
            charSet.delete(key);
            ans += 2;
        } else {
            //如果没有出现过，则将其加入集合
            charSet.add(key);
        }
    }

    //如果集合中还有元素，则说明回文串还能再加一个字符
    return charSet.size > 0 ? ans + 1 : ans;
}
