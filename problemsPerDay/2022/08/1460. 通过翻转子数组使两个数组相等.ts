function canBeEqual(target: number[], arr: number[]): boolean {
    const map: number[] = new Array(1001).fill(0);

    for (const i of target) {
        map[i]++;
    }

    for (const i of arr) {
        map[i]--;

        if (map[i] === -1) {
            return false;
        }
    }

    for (const i of map) {
        if (map[i] !== 0) {
            return false;
        }
    }

    return true;
}
