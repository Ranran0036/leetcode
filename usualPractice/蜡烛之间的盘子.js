/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
let platesBetweenCandles = function(s, queries) {
    const n = s.length;
    
    let preSum = new Array(n).fill(0);
    for(let i = 0, sum = 0; i < n; i++){
        if(s[i] == '*'){
            sum++;
        }
        preSum[i] = sum;
    }

    let left = new Array(n).fill(0);
    for(let i = 0 , l = -1; i <= n-1; i++){
        if(s[i] == '|'){
            l = i;
        }
        left[i] = l;
    }

    let right = new Array(n).fill(0);
    for(let i = n - 1 , r = -1; i >= 0; i--){
        if(s[i] == '|'){
            r = i;
        }
        right[i] = r;
    }

    const ans = new Array(queries.length).fill(0);
    for(let i = 0; i < queries.length; i++){
        const query = queries[i];
        const x = right[query[0]] , y = left[query[1]];
        ans[i] = x == -1 || y == -1 || x >= y ? 0 : preSum[y] - preSum[x];
    }

    return ans;
};
