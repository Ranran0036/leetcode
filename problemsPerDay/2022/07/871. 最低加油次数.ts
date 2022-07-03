function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
    const pq = new PriorityQueue_<number>((a, b) => a > b);
    let ans = 0;
    for (let cur = 0, idx = 0, fuel = startFuel; cur < target; ) {
        cur += fuel;
        while (idx < stations.length && stations[idx][0] <= cur) {
            pq.offer(stations[idx++][1]);
        }
        if (cur < target) {
            if (pq.data.length == 0) {
                return -1;
            }
            fuel = pq.poll()!;
            ans++;
        }
    }
    return ans;
}

class PriorityQueue_<T> {
    data: Array<T>;
    size: number;
    compare: Function;
    constructor(compare = (a: T, b: T) => a > b) {
        this.data = [];
        this.size = 0;
        this.compare = compare;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    peek(): T | null {
        return this.size === 0 ? null : this.data[0];
    }

    offer(val: T): void {
        this.data.push(val);
        this._shifUp(this.size++);
    }

    poll(): T | null {
        if (this.size === 0) {
            return null;
        }
        this._swap(0, --this.size);
        this._shifDown(0);
        return this.data.pop()!;
    }

    _parent(index: number): number {
        return (index - 1) >> 1;
    }

    _child(index: number): number {
        return (index << 1) + 1;
    }

    _shifDown(index: number): void {
        while (this._child(index) < this.size) {
            let child = this._child(index);
            if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1;
            }
            if (this.compare(this.data[index], this.data[child])) {
                break;
            }
            this._swap(index, child);
            index = child;
        }
    }

    _shifUp(index: number): void {
        while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index));
            index = this._parent(index);
        }
    }

    _swap(a: number, b: number): void {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
    }
}
