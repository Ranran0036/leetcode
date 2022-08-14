function reverseVowels(s: string): string {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const n = s.length;
    const arr = s.split("");
    let i = 0;
    let j = n - 1;
    while (i < j) {
        while (i < j && !vowels.has(arr[i])) {
            i++;
        }
        while (i < j && !vowels.has(arr[j])) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return arr.join("");
}
