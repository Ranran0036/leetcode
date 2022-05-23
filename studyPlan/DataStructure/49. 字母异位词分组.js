/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let key = str.split("").sort().join("");
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
};
