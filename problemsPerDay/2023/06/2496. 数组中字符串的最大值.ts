function maximumValue(strs: string[]): number {
    let max = Number.MIN_SAFE_INTEGER;

    for (const str of strs) {
        let isDigits = true;

        for (const char of str) {
            if (!Number.isInteger(+char)) {
                isDigits = false;
                break;
            }
        }

        max = Math.max(max, isDigits ? +str : str.length);
    }

    return max;
}
