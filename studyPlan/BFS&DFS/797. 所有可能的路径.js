/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
    let res = [];
    dfs(graph, 0, graph.length - 1, [0], res);
    return res;
};

const dfs = (graph, start, end, path, res) => {
    if (start === end) {
        res.push([...path, end]);
        return;
    }

    for (let i = 0; i < graph[start].length; i++) {
        dfs(graph, graph[start][i], end, [...path, start], res);
    }
};
