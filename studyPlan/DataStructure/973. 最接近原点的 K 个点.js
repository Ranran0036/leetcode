/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
    points.sort((a, b) => distanceToOrigin(a) - distanceToOrigin(b));
    return points.slice(0, k);
};

const distanceToOrigin = (point) => {
    return Math.sqrt(point[0] ** 2 + point[1] ** 2);
};
