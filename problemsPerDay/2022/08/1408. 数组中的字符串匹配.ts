function stringMatching(words: string[]): string[] {
    const ans: string[] = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) {
                continue;
            }

            if (words[j].indexOf(words[i]) !== -1) {
                ans.push(words[i]);
                break;
            }
        }
    }

    return ans;
}
