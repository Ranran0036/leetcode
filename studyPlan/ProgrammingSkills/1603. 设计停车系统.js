/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }
    /**
     * @param {number} carType
     * @return {boolean}
     */
    addCar(carType) {
        if (carType === 1) {
            if (this.big > 0) {
                this.big--;
                return true;
            }
        } else if (carType === 2) {
            if (this.medium > 0) {
                this.medium--;
                return true;
            }
        } else if (carType === 3) {
            if (this.small > 0) {
                this.small--;
                return true;
            }
        }

        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
