//定义Map对象的getDefault方法 如果没有这个key，则返回默认值
Map.prototype.getDefault = function (key, defaultValue) {
    if (this.get(key)) {
        return this.get(key);
    } else {
        return defaultValue;
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const shortMap = new Map();

    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    for (const item of nums1) {
        let count = shortMap.getDefault(item, 0) + 1;
        shortMap.set(item, count);
    }

    const result = [];

    for (const item of nums2) {
        if (shortMap.get(item)) {
            result.push(item);
            shortMap.set(item, shortMap.get(item) - 1);
        }
    }

    return result;
};
