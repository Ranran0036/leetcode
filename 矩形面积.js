/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
let computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    //求两个矩形  x  轴方向相交的长度
    let x = Math.max(0,Math.min(ax2,bx2)-Math.max(ax1,bx1));
    //求两个矩形  y  轴方向相交的长度
    let y = Math.max(0,Math.min(ay2,by2)-Math.max(ay1,by1));

    return (ay2-ay1)*(ax2-ax1)+(by2-by1)*(bx2-bx1)-(x*y);
};
