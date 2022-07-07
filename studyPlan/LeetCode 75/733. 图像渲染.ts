function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    //如果初始位置就是目标颜色，直接返回
    if (image[sr][sc] === color) return image;

    // 四个方向
    const directions: number[][] = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    const queue: number[][] = [];

    // 先把起始点加入队列 并修改颜色
    queue.push([sr, sc]);
    const originColor: number = image[sr][sc];
    image[sr][sc] = color;

    while (queue.length > 0) {
        const [r, c] = queue.shift()!;
        //四个方向
        for (const [dr, dc] of directions) {
            //四个方向的坐标
            const nr = r + dr;
            const nc = c + dc;
            //超出边界
            if (nr < 0 || nr >= image.length || nc < 0 || nc >= image[0].length) continue;
            //如果颜色相同，则加入队列，并且更改颜色
            if (image[nr][nc] === originColor) {
                image[nr][nc] = color;
                queue.push([nr, nc]);
            }
        }
    }

    return image;
}
