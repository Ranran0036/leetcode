function magicTower(nums: number[]): number {
    let curry = 0,
        sum = 1,
        ans = 0,
        negetive: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (nums[i] < 0) {
            insert(negetive, nums[i]);
        }

        if (sum + curry <= 0) {
            let min = negetive.shift()!;
            curry -= min;
            ans++;
        }
    }

    if (sum <= 0) {
        return -1;
    }

    return ans;
}

function insert(arr: number[], num: number) {
    if (arr[0] === undefined) {
        arr.push(num);
        return;
    }

    let left = 0,
        right = 1;

    do {
        if (num < arr[left]) {
            return arr.unshift(num);
        }
        if (num > arr[left] && num < arr[right]) {
            return arr.splice(right, 0, num);
        }
        left++;
        right++;
    } while (right < arr.length);

    return arr.push(num);
}
