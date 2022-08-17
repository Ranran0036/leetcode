class OrderedStream {
    idx: number;
    arr: string[];
    constructor(n: number) {
        this.idx = 1;
        this.arr = new Array(n + 1).fill("");
    }

    insert(idKey: number, value: string): string[] {
        this.arr[idKey] = value;
        const res: Array<string> = [];

        while (this.arr[this.idx] !== "" && this.idx < this.arr.length) {
            res.push(this.arr[this.idx++]);
        }

        return res;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
