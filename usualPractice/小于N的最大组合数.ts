function maxAtMostNDigitSet(digits: number[], target: number): number {
    const targetArr: number[] = target
        .toString()
        .split("")
        .map((value) => Number(value));

    let ansDigitsLen = targetArr.length; //目标数字位数

    const ans: number[] = new Array(ansDigitsLen);

    let digitsLen = digits.length;

    let t = 0;

    for (const num of targetArr) {
        let digitIndex = 0; //ans中保存提供数组中数字的索引 为了方便从1开始
        let match: boolean = false; //目标该位置是否有匹配提供数字

        for (let i = 0; i < digitsLen; i++) {
            if (num >= digits[i]) {
                digitIndex = i + 1;
            }

            if (num === digits[i]) {
                match = true;
            }
        }

        ans[t++] = digitIndex;

        if (match) {
            continue;
        }

        //digitIndex等于0说明目标该位置数字比提供的数字最小值还要小 这时把上一个填进去的数字改成更小的 没有更小的就再往前找
        if (digitIndex === 0) {
            for (let j = t - 1; j > 0; --j) {
                if (ans[j] > 0) {
                    break;
                }
                ans[j] += digitsLen;
                ans[j - 1]--;
            }
        }

        //把改完位置之后的全都改成提供数组中的最大值
        while (t < ansDigitsLen) {
            ans[t++] = digitsLen;
        }

        break;
    }

    //根据ans得出数字
    let res: number = 0;

    for (const i of ans) {
        if (i === 0) {
            continue;
        }

        res = res * 10 + digits[i - 1];
    }

    return res;
}

console.log(maxAtMostNDigitSet([1, 2, 4, 9], 2533));
