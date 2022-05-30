/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
    let x0 = coordinates[0][0];
    let y0 = coordinates[0][1];
    let x = coordinates[1][0] - x0;
    let y = coordinates[1][1] - y0;

    for (let i = 2; i < coordinates.length; i++) {
        if (x * (coordinates[i][1] - y0) != y * (coordinates[i][0] - x0)) {
            return false;
        }
    }

    return true;
};
