function isAlienSorted(words: string[], order: string): boolean {
    const map = new Map<string, string>();

    for (let i = 0; i < order.length; i++) {
        map.set(order[i], String.fromCharCode(97 + i));
    }

    const wordsCopy: string[] = [];

    for (const word of words) {
        let wordCopy = "";

        for (const char of word) {
            wordCopy += map.get(char);
        }

        wordsCopy.push(wordCopy);
    }

    for (let i = 1; i < wordsCopy.length; i++) {
        if (wordsCopy[i - 1] > wordsCopy[i]) {
            return false;
        }
    }

    return true;
}
