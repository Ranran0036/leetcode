function isFlipedString(s1: string, s2: string): boolean {
    return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
}
