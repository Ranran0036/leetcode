function mySqrt(x: number): number {
    let left = 0,
        right = x,
        ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        } else if (mid * mid > x) {
            right = mid - 1;
        }
    }

    return ans;
}
