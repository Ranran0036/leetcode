function CheckPermutation(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }

    const map: number[] = new Array(258).fill(0);

    for (let i = 0; i < s1.length; i++) {
        map[s1.charCodeAt(i)]++;
    }

    for (let i = 0; i < s2.length; i++) {
        map[s2.charCodeAt(i)]--;

        if (map[s2.charCodeAt(i)] < 0) {
            return false;
        }
    }

    return true;
}
