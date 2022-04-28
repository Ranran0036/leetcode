/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
    //模拟查找
    /*     let ans = 0;
    for (const item1 of arr1) {
        let flag = true;
        for (const item2 of arr2) {
            if (Math.abs(item1 - item2) <= d) {
                flag = false;
                break;
            }
        }
        if (flag) {
            ans++;
        }
    }

    return ans; */

    //将数组排序，然后二分查找
    arr2.sort((a, b) => a - b);

    let ans = 0;
    for (const item1 of arr1) {
        let idnex = binaryInsertIndex(arr2, item1);
        let flag = true;
        if (idnex === -1 || idnex === arr2.length) {
            let i = idnex === -1 ? 0 : arr2.length - 1;
            flag = Math.abs(arr2[i] - item1) > d;
        } else {
            flag =
                Math.abs(arr2[idnex] - item1) > d &&
                Math.abs(arr2[idnex - 1] - item1) > d;
        }

        if (flag) {
            ans++;
        }
    }

    return ans;
};

//寻找插入位置
const binaryInsertIndex = function (arr, target) {
    let left = 0,
        right = arr.length - 1;

    if (arr[left] > target) {
        return left - 1;
    }

    if (arr[right] < target) {
        return right + 1;
    }

    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
