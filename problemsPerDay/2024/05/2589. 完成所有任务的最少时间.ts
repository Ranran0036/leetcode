function findMinimumTime(tasks: number[][]): number {
    tasks.sort((t1, t2) => t1[1] - t2[1]);
    const stack: number[][] = [[-1, -1, 0]];
    for (let [start, end, duration] of tasks) {
        const k = binarySearch_(stack, start);
        duration -= stack[stack.length - 1][2] - stack[k - 1][2];
        if (start <= stack[k - 1][1]) {
            duration -= stack[k - 1][1] - start + 1;
        }
        if (duration <= 0) {
            continue;
        }
        while (end - stack[stack.length - 1][1] <= duration) {
            duration += stack[stack.length - 1][1] - stack[stack.length - 1][0] + 1;
            stack.pop();
        }
        stack.push([end - duration + 1, end, stack[stack.length - 1][2] + duration]);
    }
    return stack[stack.length - 1][2];
}

const binarySearch_ = (stack: number[][], target: number): number => {
    let low = 0;
    let high = stack.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (stack[mid][0] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
