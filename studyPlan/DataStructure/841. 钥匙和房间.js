/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
    const visited = new Array(rooms.length).fill(false);
    let count = 0;

    const n = rooms.length;
    const dfs = function (rooms, i) {
        if (visited[i]) {
            return;
        }

        visited[i] = true;
        count++;

        for (const j of rooms[i]) {
            dfs(rooms, j);
        }
    };

    dfs(rooms, 0);

    return count === n;
};
