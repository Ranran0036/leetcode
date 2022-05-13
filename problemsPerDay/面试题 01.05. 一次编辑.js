/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
const oneEditAway = function (first, second) {
    let start1 = 0,
        start2 = 0,
        end1 = first.length - 1,
        end2 = second.length - 1;

    while (start1 <= end1 && start2 <= end2) {
        if (first[start1] === second[start2]) {
            start1++;
            start2++;
            continue;
        }

        if (first[end1] === second[end2]) {
            end1--;
            end2--;
        } else {
            break;
        }
    }

    return (
        end1 - start1 + end2 - start2 <= 0 &&
        Math.abs(start1 - start2) <= 1 &&
        Math.abs(end1 - end2) <= 1
    );
};
