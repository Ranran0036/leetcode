function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    let start = 0;
    let end = 0;
    let i = 0;
    while (i < nums.length) {
        start = nums[i];
        end = start;
        while (i + 1 < nums.length && nums[i + 1] === end + 1) {
            end++;
            i++;
        }
        result.push(start === end ? start.toString() : `${start}->${end}`);
        i++;
    }
    return result;
}
