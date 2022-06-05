/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
class Solution {
    constructor(radius, x_center, y_center) {
        this.radius = radius;
        this.x_center = x_center;
        this.y_center = y_center;
    }
    /**
     * @return {number[]}
     */
    randPoint() {
        while (true) {
            const x = Math.random() * 2 * this.radius - this.radius;
            const y = Math.random() * 2 * this.radius - this.radius;
            if (x * x + y * y <= this.radius * this.radius) {
                return [x + this.x_center, y + this.y_center];
            }
        }
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
