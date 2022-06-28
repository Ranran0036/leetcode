function isIsomorphic(s: string, t: string): boolean {
    if (s === t) {
        return true;
    }

    return parse(s) === parse(t);
}

function parse(s: string): string {
    const arr = s.split("");
    const filterArr = [...new Set(arr)];
    const keys: { [key: string]: string } = {};

    filterArr.forEach((item, index) => {
        keys[item] = "-" + index;
    });

    return arr.map((item) => keys[item]).join("");
}
