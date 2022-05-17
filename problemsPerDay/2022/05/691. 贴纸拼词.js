/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
const minStickers = function (stickers, target) {
    const set = new Set(target),
        availables = new Array(),
        queue = new Queue(),
        explored = new Set();

    const getCounter = (s) => {
            const map = new Map();
            for (const c of s) {
                if (set.has(c)) {
                    if (map.has(c)) {
                        map.set(c, map.get(c) + 1);
                    } else {
                        map.set(c, 1);
                    }
                }
            }
            return map.size > 0 ? map : null;
        },
        transfer = (s, map) => {
            const copy = new Map(map),
                res = [];
            for (const c of s) {
                if (copy.has(c) && copy.get(c) > 0) {
                    copy.set(c, copy.get(c) - 1);
                } else {
                    res.push(c);
                }
            }
            return res.join("");
        };

    for (const s of stickers) {
        const mp = getCounter(s);
        if (mp != null) {
            availables.push(mp);
        }
    }

    queue.enqueue([target, 0]);
    explored.add(target);

    while (!queue.isEmpty()) {
        const [cur, step] = queue.dequeue();
        if (cur.length == 0) {
            return step;
        }
        for (const mp of availables) {
            if (mp.has(cur.charAt(0))) {
                const nxt = transfer(cur, mp);
                if (!explored.has(nxt)) {
                    explored.add(nxt);
                    queue.enqueue([nxt, step + 1]);
                }
            }
        }
    }
    return -1;
};
