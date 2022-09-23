function canFormArray(arr: number[], pieces: number[][]): boolean {
    const pieceMap: Map<number, number[]> = new Map<number, number[]>();

    for (const piece of pieces) {
        pieceMap.set(piece[0], piece);
    }

    let index: number = 0;

    while (index < arr.length) {
        if (pieceMap.has(arr[index])) {
            const piece = pieceMap.get(arr[index])!;
            const len = piece.length;
            let range: number = 1;

            while (range <= len - 1) {
                if (arr[index + range] !== piece[range]) {
                    return false;
                }
                range++;
            }

            index += len;
        } else {
            return false;
        }
    }

    return true;
}

console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
