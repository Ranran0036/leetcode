/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function (points) {
    if (points.length < 3) {
        return points.length;
    }

    let res = 0;

    for (let i = 0; i < points.length; i++) {
        if (res >= points.length - i || res > points.length >> 1) {
            break;
        }

        const map = new Map();

        for (let j = i + 1; j < points.length; j++) {
            let x = points[j][0] - points[i][0];
            let y = points[j][1] - points[i][1];

            if (x === 0) {
                y = 1;
            } else if (y === 0) {
                x = 1;
            } else {
                if (x < 0) {
                    x = -x;
                    y = -y;
                }

                const g = gcd(Math.abs(x), Math.abs(y));
                x /= g;
                y /= g;
            }

            const key = y + x * 20001;
            map.set(key, (map.get(key) || 0) + 1);
        }

        let max = 0;

        for (let [, v] of map) {
            max = Math.max(max, v + 1);
        }

        res = Math.max(res, max);
    }

    return res;
};

const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
};
