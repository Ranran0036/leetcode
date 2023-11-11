function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    function binarySearch(arr: number[], low: number, high: number, target: number): number {
        let res = high + 1;

        while (low <= high) {
            const mid = low + Math.floor((high - low) / 2);

            if (arr[mid] > target) {
                res = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return res;
    }

    potions.sort((a, b) => a - b);

    return spells.map((spell) => potions.length - binarySearch(potions, 0, potions.length - 1, (success - 1) / spell));
}
