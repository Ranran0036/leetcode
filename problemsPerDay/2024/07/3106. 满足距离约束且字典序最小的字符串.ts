function getSmallestString(s: string, k: number): string {
    let arr = s.split("");
    for (let i = 0; i < arr.length; ++i) {
        let dis = Math.min(arr[i].charCodeAt(0) - "a".charCodeAt(0), "z".charCodeAt(0) - arr[i].charCodeAt(0) + 1);
        if (dis <= k) {
            arr[i] = "a";
            k -= dis;
        } else {
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - k);
            break;
        }
    }
    return arr.join("");
}
