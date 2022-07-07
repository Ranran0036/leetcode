function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineMap: number[] = new Array(26).fill(0);

    for (const char of magazine) {
        magazineMap[char.charCodeAt(0) - 97]++;
    }

    for (const char of ransomNote) {
        if (magazineMap[char.charCodeAt(0) - 97] === 0) {
            return false;
        }

        magazineMap[char.charCodeAt(0) - 97]--;
    }

    return true;
}
