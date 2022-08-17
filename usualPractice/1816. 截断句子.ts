function truncateSentence(s: string, k: number): string {
    let index = 0;
    let count = 0;

    while (count < k) {
        if (s[index + 1] === " " || index === s.length - 1) {
            count++;
        }
        index++;
    }

    return s.substring(0, index);
}
