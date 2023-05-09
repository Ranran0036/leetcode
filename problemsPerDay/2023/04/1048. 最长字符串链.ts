function longestStrChain(words: string[]): number {
    const cnt: Map<string, number> = new Map();
    words.sort((a, b) => a.length - b.length);
    let res = 0;
    for (const word of words) {
        cnt.set(word, 1);
        for (let i = 0; i < word.length; i++) {
            const prev = word.substring(0, i) + word.substring(i + 1);
            if (cnt.has(prev)) {
                cnt.set(word, Math.max(cnt.get(word)!, cnt.get(prev)! + 1));
            }
        }
        res = Math.max(res, cnt.get(word)!);
    }
    return res;
}
