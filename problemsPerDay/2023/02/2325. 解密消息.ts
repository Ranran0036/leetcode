function decodeMessage(key: string, message: string): string {
    let ans: string = "";
    const map: number[] = new Array(26).fill(-1);
    let index = 0;

    for (const c of key) {
        if (c === " ") {
            continue;
        }

        let charCode = c.charCodeAt(0) - 97;
        if (map[charCode] !== -1) {
            continue;
        }

        map[charCode] = index++;
    }

    for (const c of message) {
        if (c === " ") {
            ans += " ";
        } else {
            ans += String.fromCharCode(map[c.charCodeAt(0) - 97] + 97);
        }
    }

    return ans;
}

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
