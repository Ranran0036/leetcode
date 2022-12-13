function checkIfPangram(sentence: string): boolean {
    const flag = 67108864;
    let map: number = 0;

    for (const char of sentence) {
        let charCode = char.charCodeAt(0) - "a".charCodeAt(0);
        map |= 1 << charCode;

        if (map === flag - 1) {
            return true;
        }
    }

    return false;
}
