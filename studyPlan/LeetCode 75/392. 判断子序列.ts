function isSubsequence(s: string, t: string): boolean {
    let pointS = 0,
        pointT = 0;

    let lenS = s.length,
        lenT = t.length;

    while (pointT < lenT && pointS < lenS) {
        if (s[pointS] === t[pointT]) {
            pointS++;
        }
        pointT++;
    }

    return pointS === lenS;
}
