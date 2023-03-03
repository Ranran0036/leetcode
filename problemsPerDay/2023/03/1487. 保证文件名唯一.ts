function getFolderNames(names: string[]): string[] {
    const namesMap: Map<string, number> = new Map();
    const result: string[] = [];

    for (const name of names) {
        if (!namesMap.has(name)) {
            namesMap.set(name, 1);
            result.push(name);
        } else {
            let k = namesMap.get(name)!;
            let newName = `${name}(${k})`;

            while (namesMap.has(newName)) {
                k++;
                newName = `${name}(${k})`;
            }

            result.push(newName);
            namesMap.set(name, k + 1);
            namesMap.set(newName, 1);
        }
    }

    return result;
}
