/**
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
    const map = new Map([
        ["()", "o"],
        ["(al)", "al"],
        ["G", "G"],
    ]);

    let ans = "";
    let sub = "";

    for (const char of command) {
        sub += char;
        if (map.has(sub)) {
            ans += map.get(sub);
            sub = "";
        }
    }

    return ans;
    //return command.replace(/\(.*?\)/g, (match) => map.get(match));
};
