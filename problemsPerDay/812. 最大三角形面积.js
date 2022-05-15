/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function (points) {
    let maxArea = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                maxArea = Math.max(
                    maxArea,
                    calculateArea(points[i], points[j], points[k])
                );
            }
        }
    }
    return maxArea;
};

/**
 *
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @return {number}
 */
const calculateArea = function (p1, p2, p3) {
    return (
        Math.abs(
            p1[0] * (p2[1] - p3[1]) +
                p2[0] * (p3[1] - p1[1]) +
                p3[0] * (p1[1] - p2[1])
        ) / 2
    );
};
