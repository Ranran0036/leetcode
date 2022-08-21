function isPrefixOfWord(sentence: string, searchWord: string): number {
    let n = sentence.length,
        index = 1,
        start = 0,
        end = 0;

    while (start < n) {
        while (end < n && sentence[end] !== " ") {
            end++;
        }

        if (isPrefix(sentence, start, end, searchWord)) {
            return index;
        }

        index++;
        start = ++end;
    }

    return -1;
}

function isPrefix(sentence: string, start: number, end: number, searchWord: string) {
    for (let i = 0; i < searchWord.length; i++) {
        if (sentence[start + i] !== searchWord[i] || start + i >= end) {
            return false;
        }
    }

    return true;
}
