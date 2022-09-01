function findClosestElements(arr: number[], k: number, x: number): number[] {
    let right = binarySearch(arr, x);
    let left = right - 1;

    while (k-- > 0) {
        if (left < 0) {
            right++;
        } else if (right >= arr.length) {
            left--;
        } else if (x - arr[left] <= arr[right] - x) {
            left--;
        } else {
            right++;
        }
    }

    const ans: number[] = [];

    for (let i = left + 1; i < right; i++) {
        ans.push(arr[i]);
    }

    return ans;
}

function binarySearch(arr: number[], target: number): number {
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
