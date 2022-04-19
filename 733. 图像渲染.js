/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
    let len = image.length;
    let width = image[0].length;
    let oldColor = image[sr][sc];
    if (oldColor === newColor) {
        return image;
    }
    let queue = [[sr, sc]];
    while (queue.length) {
        let [i, j] = queue.shift();
        if (
            i < 0 ||
            i >= len ||
            j < 0 ||
            j >= width ||
            image[i][j] !== oldColor
        ) {
            continue;
        }
        image[i][j] = newColor;
        queue.push([i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]);
    }
    return image;
};
