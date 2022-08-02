function generateTheString(n: number): string {
    const charMap: Map<number, number> = new Map<number, number>();
    let ans = "";

    //选定一个字符
    function pickChar(): number {
        const char = Math.floor(Math.random() * 26) + 97;

        if (charMap.has(char) && charMap.size < 26) {
            return pickChar();
        } else if (charMap.has(char) && charMap.size === 26) {
            //如果已经有了26个字符，则随机选一个字符
            return char;
        }

        charMap.set(char, 0);
        return char;
    }

    //选定字符重复次数
    function pickRepeat(n: number, needOdd: boolean): number {
        const repeat = Math.floor(Math.random() * n) + 1;

        if (needOdd) {
            if (repeat % 2 === 0) {
                return pickRepeat(n, needOdd);
            }
        } else {
            if (repeat % 2 === 1) {
                return pickRepeat(n, needOdd);
            }
        }

        return repeat;
    }

    while (n > 0) {
        //选定字母
        let char: number = pickChar();
        //选定重复次数
        let repeat: number;
        if (charMap.get(char)! % 2 === 0) {
            repeat = pickRepeat(n, true);
        } else {
            repeat = pickRepeat(n, false);
        }

        ans += String.fromCharCode(char).repeat(repeat);
        charMap.set(char, charMap.get(char)! + repeat);

        n -= repeat;
    }

    return ans;
}
