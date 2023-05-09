function countTime(time: string): number {
    let res = 0;

    function dfs(arr: string[], pos: number) {
        if (pos === arr.length) {
            if (check(arr)) {
                res++;
            }
            return;
        }

        if (arr[pos] === "?") {
            for (let i = 0; i < 10; i++) {
                arr[pos] = String.fromCharCode("0".charCodeAt(0) + i);
                dfs(arr, pos + 1);
                arr[pos] = "?";
            }
        } else {
            dfs(arr, pos + 1);
        }
    }

    function check(arr: string[]): boolean {
        const hh = (arr[0].charCodeAt(0) - "0".charCodeAt(0)) * 10 + arr[1].charCodeAt(0) - "0".charCodeAt(0);
        const mm = (arr[3].charCodeAt(0) - "0".charCodeAt(0)) * 10 + arr[4].charCodeAt(0) - "0".charCodeAt(0);

        return hh < 24 && mm < 60;
    }

    const arr = [...time];

    dfs(arr, 0);

    return res;
}
