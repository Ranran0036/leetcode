function wiggleSort(nums: number[]): void {
    let n = nums.length;
    let x = Math.floor((n + 1) / 2);
    let mid = x - 1;
    let target = findKthLargest(nums, n - mid);

    for (let k = 0, i = 0, j = n - 1; k <= j; k++) {
        if (nums[transAddress(k, n)] > target) {
            while (j > k && nums[transAddress(j, n)] > target) {
                j--;
            }
            swap(nums, transAddress(k, n), transAddress(j--, n));
        }

        if (nums[transAddress(k, n)] < target) {
            swap(nums, transAddress(k, n), transAddress(i++, n));
        }
    }
}

function findKthLargest(nums: number[], k: number): number {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        let pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        let newPivot = partitionAroundPivot(left, right, pivot, nums);

        if (newPivot === k - 1) {
            return nums[newPivot];
        } else if (newPivot > k - 1) {
            right = newPivot - 1;
        } else {
            left = newPivot + 1;
        }
    }
    return nums[k - 1];
}

function transAddress(i: number, n: number): number {
    return (2 * n - 2 * i - 1) % (n | 1);
}

function partitionAroundPivot(left: number, right: number, pivot: number, nums: number[]): number {
    let pivotValue = nums[pivot];
    let newPivot = left;
    swap(nums, pivot, right);

    for (let i = left; i < right; i++) {
        if (nums[i] > pivotValue) {
            swap(nums, i, newPivot++);
        }
    }

    swap(nums, right, newPivot);
    return newPivot;
}

function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
