function minCostToMoveChips(position: number[]): number {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return Math.min(even, odd);
}
