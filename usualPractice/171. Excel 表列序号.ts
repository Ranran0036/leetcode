function titleToNumber(columnTitle: string): number {
    const len = columnTitle.length;
    let result = 0;

    for (let i = 0; i < len; i++) {
        result += Math.pow(26, len - i - 1) * (columnTitle.charCodeAt(i) - 64);
    }

    return result;
}
