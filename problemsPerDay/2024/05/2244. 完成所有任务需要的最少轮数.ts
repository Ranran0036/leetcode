function minimumRounds(tasks: number[]): number {
    const map = new Map<number, number>();

    for (const task of tasks) {
        map.set(task, (map.get(task) ?? 0) + 1);
    }

    let result: number = 0;

    for (const [_, v] of map) {
        if (v === 1) {
            return -1;
        } else if (v % 3 === 0) {
            result += v / 3;
        } else {
            result += Math.ceil(v / 3);
        }
    }

    return result;
}
