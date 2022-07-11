function findAnagrams(s: string, p: string): number[] {
    const ls = s.length,
        lp = p.length,
        map: Map<string, number> = new Map();
    for (const char of p) {
        map.set(char, map.has(char) ? map.get(char)! + 1 : 1);
    }
    let ans: number[] = [],
        l = 0,
        r = -1;
    let freq: number[] = new Array(26).fill(0);
    while (r < ls) {
        r++;
        if (!map.has(s.charAt(r))) {
            l = r + 1;
            freq.fill(0);
        } else {
            let idx = s.charAt(r).charCodeAt(0) - "a".charCodeAt(0);
            freq[idx]++;
            while (map.get(s.charAt(r))! < freq[idx]) {
                freq[s.charAt(l).charCodeAt(0) - "a".charCodeAt(0)]--;
                l++;
            }
            if (r - l + 1 === lp) {
                ans.push(l);
                freq[s.charAt(l).charCodeAt(0) - "a".charCodeAt(0)]--;
                l++;
            }
        }
    }
    return ans;
}
