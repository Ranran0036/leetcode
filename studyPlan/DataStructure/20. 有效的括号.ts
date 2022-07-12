function isValid(s: string): boolean {
    if (s.length & 1) {
        return false;
    }

    const map: Map<string, string> = new Map<string, string>([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    const stack: string[] = [];

    for (const c of s) {
        if (map.has(c)) {
            const last = stack.pop();
            if (!last || last !== map.get(c)) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    return !stack.length;
}
