/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    /*    let ans = 0;

    let maxLeft = new Array(height.length).fill(0);
    let maxRight = new Array(height.length).fill(0);

    for (let i = 1; i < height.length; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
    }

    for (let i = height.length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
    }

    for (let i = 1; i < height.length - 1; i++) {
        let min = Math.min(maxLeft[i], maxRight[i]);

        if (min > height[i]) {
            ans += min - height[i];
        }
    }

    return ans; */
    let ans = 0,
        maxLeft = 0,
        maxRight = 0,
        left = 1,
        right = height.length - 2;

    for (let i = 1; i < height.length - 1; i++) {
        if (height[left - 1] < height[right + 1]) {
            maxLeft = Math.max(maxLeft, height[left - 1]);
            if (maxLeft > height[left]) {
                ans += maxLeft - height[left];
            }
            left++;
        } else {
            maxRight = Math.max(maxRight, height[right + 1]);
            if (maxRight > height[right]) {
                ans += maxRight - height[right];
            }
            right--;
        }
    }

    return ans;
};
