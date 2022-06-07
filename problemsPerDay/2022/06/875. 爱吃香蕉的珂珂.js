/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = 0;

    for (const pile of piles) {
        right = Math.max(right, pile);
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (getTime(piles, mid) > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

const getTime = (piles, speed) => {
    let time = 0;
    for (const pile of piles) {
        time += Math.ceil(pile / speed);
    }

    return time;
};
