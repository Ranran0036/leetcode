function getLeastNumbers(arr: number[], k: number): number[] {
    const priorityQueue = new PriorityQueue1();

    for (let i = 0; i < k; i++) {
        priorityQueue.enQueue(arr[i]);
    }

    for (let i = k; i < arr.length; i++) {
        if (!priorityQueue.isEmpty() && arr[i] < priorityQueue.getFront()) {
            priorityQueue.deQueue();
            priorityQueue.enQueue(arr[i]);
        }
    }

    const rt: number[] = [];
    for (let i = 0; i < k; i++) {
        rt.push(priorityQueue.deQueue());
    }

    return rt;
}

class MaxHep<T extends number> {
    private data: T[] = [];

    constructor(arr?: T[]) {
        if (arr?.length) {
            this.data = arr;
            for (let i = this.parent(this.size); i >= 0; i--) {
                this.shiftDown(i);
            }
        }
    }

    public get size(): number {
        return this.data.length;
    }

    public get isEmpty(): number {
        return this.data.length;
    }

    public getData(): T[] {
        return this.data;
    }

    public add(item: T): void {
        this.data.push(item);
        this.shiftUp(this.size - 1);
    }

    private swap(i: number, j: number): void {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    private parent(i: number): number {
        if (i === 0) {
            throw new Error("index_0 dasen't have parent");
        }
        return Math.floor((i - 1) / 2);
    }

    private left(i: number): number {
        return 2 * i + 1;
    }

    private right(i: number): number {
        return 2 * i + 2;
    }

    private shiftUp(i: number): void {
        while (i > 0 && this.data[i] > this.data[this.parent(i)]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    public peek(): T {
        if (this.size === 0) {
            throw new Error("heap is empty");
        }
        return this.data[0];
    }

    public pop(): T {
        const rt = this.peek();
        this.swap(0, this.size - 1);
        this.data.pop();
        this.shiftDown(0);
        return rt;
    }

    private shiftDown(i: number): void {
        while (this.left(i) < this.size) {
            let maxValueIndex = this.left(i);
            const rightIndex = this.right(i);

            if (rightIndex < this.size && this.data[rightIndex] > this.data[maxValueIndex]) {
                maxValueIndex = rightIndex;
            }

            if (this.data[i] > this.data[maxValueIndex]) {
                break;
            }

            this.swap(i, maxValueIndex);
            i = maxValueIndex;
        }
    }

    public replace(item: T): T {
        const rt = this.peek();
        this.data[0] = item;
        this.shiftDown(0);
        return rt;
    }
}

class PriorityQueue1 {
    private maxHeap: MaxHep<number> = new MaxHep<number>();

    public enQueue(item: number): void {
        this.maxHeap.add(item);
    }

    public deQueue(): number {
        return this.maxHeap.pop();
    }

    public getSize(): number {
        return this.maxHeap.size;
    }

    public isEmpty(): boolean {
        return this.maxHeap.size === 0;
    }

    public getFront(): number {
        return this.maxHeap.peek();
    }
}
