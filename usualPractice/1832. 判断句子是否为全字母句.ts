function checkIfPangram(sentence: string): boolean {
    if (sentence.length < 26) {
        return false;
    }

    const letters = new Array<boolean>(26).fill(false);

    for (const c of sentence) {
        const index = c.charCodeAt(0) - "a".charCodeAt(0);
        letters[index] = true;
    }

    for (const b of letters) {
        if (!b) {
            return false;
        }
    }

    return true;
}
