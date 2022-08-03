function orderlyQueue(s: string, _k: number): string {
    if (_k == 1) {
        let i = 0,
            j = 1,
            k = 0,
            n = s.length;

        while (i < n && j < n && k < n) {
            const a = s[(i + k) % n],
                b = s[(j + k) % n];
            if (a == b) k++;
            else {
                if (a > b) i += k + 1;
                else j += k + 1;
                if (i == j) i++;
                k = 0;
            }
        }

        i = Math.min(i, j);

        return s.substring(i) + s.substring(0, i);
    } else {
        return [...s].sort().join("");
    }
}
