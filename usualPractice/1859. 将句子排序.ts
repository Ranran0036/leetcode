function sortSentence(s: string): string {
    const words = s.split(" ");

    words.sort((a, b) => {
        return Number(a[a.length - 1]) - Number(b[b.length - 1]);
    });

    return words.map((a) => a.substring(0, -1)).join(" ");
}
