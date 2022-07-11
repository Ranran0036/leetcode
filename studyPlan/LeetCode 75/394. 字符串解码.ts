function decodeString(s: string): string {
    const regexp = /(\d*?)\[([^\[\]]*?)\]/g;
    let res = s;
    while (regexp.test(res)) {
        res = res.replace(regexp, (_, repeat, str) => str.padEnd(str.length * repeat, str));
    }
    return res;
}
