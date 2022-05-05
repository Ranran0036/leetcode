/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
    const cities = isConnected.length;
    const visited = new Set();

    let province = 0;

    for (let i = 0; i < cities; i++) {
        if (!visited.has(i)) {
            dfs(i, visited, isConnected, cities);
            province++;
        }
    }

    return province;
};

const dfs = (city, visited, isConnected, cities) => {
    for (let j = 0; j < cities; j++) {
        if (isConnected[city][j] && !visited.has(j)) {
            visited.add(j);
            dfs(j, visited, isConnected, cities);
        }
    }
};
