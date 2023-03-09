function minimumRecolors(blocks: string, k: number): number {
    let left = 0,
        right = k - 1;

    let white = 0;

    for (let i = left; i <= right; i++) {
        if (blocks[i] === "W") {
            white++;
        }
    }

    let ans = white;

    while (right + 1 < blocks.length) {
        if (blocks[left] === "W" && blocks[right + 1] === "B") {
            white--;
        } else if (blocks[left] === "B" && blocks[right + 1] === "W") {
            white++;
        }

        if (white === 0) {
            return 0;
        }

        ans = Math.min(ans, white);

        left++;
        right++;
    }

    return ans;
}
