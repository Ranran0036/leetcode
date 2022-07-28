function addBinary(a: string, b: string): string {
    let carry = 0,
        ans = "",
        resA = 0,
        resB = 0;

    const maxLen = Math.max(a.length, b.length);
    const aLastIdex = a.length - 1,
        bLasIndex = b.length - 1;

    for (let i = 0; i < maxLen; i++) {
        resA = aLastIdex >= i ? parseInt(a[aLastIdex - i]) : 0;
        resB = bLasIndex >= i ? parseInt(b[bLasIndex - i]) : 0;

        ans += (resA + resB + carry) % 2; // 拼接相加结果
        carry = Math.floor((resA + resB + carry) / 2); //保存进位
    }

    if (carry > 0) ans += "1"; //循环结束还有进位 拼接1

    return ans.split("").reverse().join(""); //字符串反转
}

console.log(addBinary("100", "110010"));
