function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => {
        return a - b;
    });
    while (stones.length >= 2) {
        let len: number = stones.length;
        let n1: number = stones[len - 2];
        let n2: number = stones[len - 1];
        stones = stones.slice(0, len - 2);
        let k = Math.abs(n1 - n2);
        if (k) {
            if (!stones.length) {
                stones.push(k);
                break;
            }
            for (let i = 0; i < stones.length; i++) {
                if (stones[i] > k) {
                    stones.splice(i, 0, k);
                    break;
                }
                if (i === stones.length - 1) {
                    stones.push(k);
                    break;
                }
            }
        }
    }
    return stones.length ? stones[0] : 0;
}
