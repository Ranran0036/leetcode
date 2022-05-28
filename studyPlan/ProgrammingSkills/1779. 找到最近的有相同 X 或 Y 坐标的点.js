/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = function (x, y, points) {
    let min = Number.MAX_SAFE_INTEGER;
    let res = -1;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            const distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            if (distance < min) {
                min = distance;
                res = i;
            }
        }
    }
    return res;
};

console.log(
    nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4],
    ])
);
