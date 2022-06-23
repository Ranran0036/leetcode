function findSubstring(s: string, words: string[]): number[] {
    let ans: number[] = [];
    let wordNum = words.length;

    if (wordNum === 0) {
        return ans;
    }

    let wordLen = words[0].length;
    const wordMap: Map<string, number> = new Map<string, number>();

    for (const word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word)! + 1);
        } else {
            wordMap.set(word, 1);
        }
    }

    for (let j = 0; j < wordLen; j++) {
        const hasWords: Map<string, number> = new Map<string, number>();
        let count: number = 0; //记录hasWords中的单词数量
        //每次移动一个单词长度
        for (let i = j; i < s.length - wordNum * wordLen + 1; i += wordLen) {
            let hasRemoved: boolean = false;
            while (count < wordNum) {
                const word = s.substring(i + count * wordLen, i + (count + 1) * wordLen);
                if (wordMap.has(word)) {
                    let value = hasWords.get(word) ? hasWords.get(word)! : 0;
                    hasWords.set(word, value + 1);

                    if (hasWords.get(word)! > wordMap.get(word)!) {
                        hasRemoved = true;
                        let removeNum = 0;

                        while (hasWords.get(word)! > wordMap.get(word)!) {
                            const firstWord = s.substring(i + removeNum * wordLen, i + (removeNum + 1) * wordLen);
                            let v = hasWords.get(firstWord)! - 1;
                            hasWords.set(firstWord, v);
                            removeNum++;
                        }

                        count = count - removeNum + 1;
                        i = i + (removeNum - 1) * wordLen;
                        break;
                    }
                } else {
                    hasWords.clear();
                    i = i + count * wordLen;
                    count = 0;
                    break;
                }
                count++;
            }

            if (count === wordNum) {
                ans.push(i);
            }

            if (count > 0 && !hasRemoved) {
                const firstWord = s.substring(i, i + wordLen);
                let v = hasWords.get(firstWord)! - 1;
                hasWords.set(firstWord, v);
                count--;
            }
        }
    }

    return ans;
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
