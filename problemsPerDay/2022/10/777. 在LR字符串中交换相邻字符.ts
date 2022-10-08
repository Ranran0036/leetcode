function canTransform(start: string, end: string): boolean {
    const n: number = start.length;
    let i: number = 0,
        j: number = 0;

    while (i < n || j < n) {
        while (i < n && start.charAt(i) === "X") {
            i++;
        }

        while (j < n && end.charAt(j) === "X") {
            j++;
        }

        if (i === n || j === n) {
            return i === j;
        }

        if (start.charAt(i) !== end.charAt(j)) {
            return false;
        }

        if (start.charAt(i) === "L" && i < j) {
            return false;
        }

        if (start.charAt(i) === "R" && i > j) {
            return false;
        }

        i++;
        j++;
    }

    return i === j;
}
