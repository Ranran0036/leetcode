/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = function (nums) {
    let sum = 0;
    let median = bfprt(
        nums,
        0,
        nums.length - 1,
        Math.floor(nums.length / 2) - 1
    );

    for (let i = 0; i < nums.length; i++) {
        sum += Math.abs(nums[i] - median);
    }

    return sum;

    /* //排序之后，取中位数  计算每个数减去中位数的绝对值
    nums.sort((a, b) => a - b);

    let median = nums[Math.floor(nums.length / 2)];

    let sum = 0;

    for (const num of nums) {
        sum += Math.abs(num - median);
    }

    return sum; */
};

const bfprt = function (nums, l, r, index) {
    if (l === r) {
        return nums[l];
    }

    const pivot = medianOfMedians(nums, l, r);
    const range = partition(nums, l, r, pivot);

    if (index >= range[0] && index <= range[1]) {
        return nums[index];
    } else if (index < range[0]) {
        return bfprt(nums, l, range[0] - 1, index);
    } else {
        return bfprt(nums, range[1] + 1, r, index);
    }
};

const partition = function (nums, l, r, pivot) {
    let less = l - 1;
    let more = r + 1;
    let cur = l;

    while (cur < more) {
        if (nums[cur] < pivot) {
            swap(nums, ++less, cur++);
        } else if (nums[cur] > pivot) {
            swap(nums, --more, cur);
        } else {
            cur++;
        }
    }

    return [less + 1, more - 1];
};

const medianOfMedians = function (nums, l, r) {
    let size = r - l + 1;
    let mArr = new Array(Math.ceil(size / 5));

    for (let i = 0; i < mArr.length; i++) {
        let teamFirst = l + i * 5;
        mArr[i] = getMedian(nums, teamFirst, Math.min(teamFirst + 4, r));
    }

    return bfprt(mArr, 0, mArr.length - 1, Math.floor(mArr.length / 2));
};

const getMedian = function (nums, l, r) {
    insertionSort(nums, l, r);
    return nums[Math.floor((l + r) / 2)];
};

const insertionSort = function (nums, l, r) {
    for (let i = l + 1; i <= r; i++) {
        for (let j = i - 1; j >= l && nums[j] > nums[j - 1]; j--) {
            swap(nums, j, j + 1);
        }
    }
};

const swap = function (nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
};
