function orchestraLayout(num: number, xPos: number, yPos: number): number {
    let layer = BigInt(Math.min(xPos, yPos, num - xPos - 1, num - yPos - 1));
    let x: bigint = BigInt(xPos);
    let y: bigint = BigInt(yPos);
    let bNum: bigint = BigInt(num);
    let c: bigint = 1n;

    c += 4n * (bNum - 1n) * layer - 4n * (layer - 1n) * layer;
    if (x === layer) {
        c += y - layer;
    } else if (y === bNum - 1n - layer && x !== layer) {
        c += bNum - 2n * layer - 1n + x - layer;
    } else if (x === bNum - 1n - layer && y !== bNum - 1n - layer) {
        c += 2n * (bNum - 2n * layer) - 2n + bNum - 1n - layer - y;
    } else if (y === layer && x !== bNum - 1n - layer) {
        c += 3n * (bNum - 2n * layer) - 3n + bNum - 1n - layer - x;
    }
    // 对9取模，返回
    c %= 9n;
    return Number(c === 0n ? 9n : c);
}
