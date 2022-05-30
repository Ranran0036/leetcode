/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
    const map = new Map();
    const stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }
        map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1);
        stack.push(nums2[i]);
    }

    return nums1.map((num) => map.get(num));
};

console.log(nextGreaterElement([5, 3, 2, 4, 8, 9, 7, 1], [5, 3, 2, 4, 8, 9, 7, 1]));
