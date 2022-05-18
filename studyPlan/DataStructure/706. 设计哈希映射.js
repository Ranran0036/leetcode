class MyHashMap {
    constructor() {
        this.BASE = 1000;
        this.data = new Array(this.BASE).fill([]);
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let hash = key % this.BASE;

        for (const k_v of this.data[hash]) {
            if (k_v[0] === key) {
                k_v[1] = value;
                return;
            }
        }

        this.data[hash].push([key, value]);
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let hash = key % this.BASE;

        for (const [k, v] of this.data[hash]) {
            if (k === key) {
                return v;
            }
        }

        return -1;
    }
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let hash = key % this.BASE;

        for (let i = 0; i < this.data[hash].length; i++) {
            if (this.data[hash][i][0] === key) {
                this.data[hash].splice(i, 1);
                return;
            }
        }

        return;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
