function strStr(str1: string, str2: string): number {
    if (str2 == "") return 0;
    if (str1.length < str2.length) return -1;
    // i用来遍历str1,j用来遍历str2,k记录公共前后缀最大长度
    // 统计next数组
    const next: number[] = new Array(str2.length);
    next[0] = -1;
    for (let i = 0, k = -1; i < str2.length - 1; ) {
        if (k == -1 || str2[i] == str2[k]) {
            i++;
            k++;
            next[i] = k;
        } else {
            // 回退
            k = next[k];
        }
    }
    let i = 0,
        j = 0;
    while (i < str1.length && j < str2.length) {
        if (j == -1 || str1[i] == str2[j]) {
            i++;
            j++;
        } else {
            // 回退
            j = next[j];
        }
    }
    if (j >= str2.length) return i - j;
    return -1;
}
