function findRelativeRanks(score: number[]): string[] {
    const level: string[] = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const ans: string[] = [];
    const map: Map<number, string> = new Map<number, string>();

    //const [...copy] = score;
    const copy: number[] = [...score];

    copy.sort((a, b) => b - a);

    for (let i = 0; i < copy.length; i++) {
        if (i > 2) {
            map.set(copy[i], `${i + 1}`);
        } else {
            map.set(copy[i], level[i]);
        }
    }

    for (const num of score) {
        ans.push(map.get(num)!);
    }

    return ans;
}

console.log(findRelativeRanks([1]));
