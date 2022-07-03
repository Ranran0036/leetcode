class Status {
    lSum: number;
    rSum: number;
    mSum: number;
    iSum: number;

    constructor(lSum: number, rSum: number, mSum: number, iSum: number) {
        this.lSum = lSum;
        this.rSum = rSum;
        this.mSum = mSum;
        this.iSum = iSum;
    }
}

function getInfo(a: number[], l: number, r: number): Status {
    if (l === r) {
        return new Status(a[l], a[l], a[l], a[l]);
    }

    const mid = (l + r) >> 1;
    const lSub = getInfo(a, l, mid);
    const rSub = getInfo(a, mid + 1, r);

    return pushUp(lSub, rSub);
}

function pushUp(lSub: Status, rSub: Status): Status {
    const iSum = lSub.iSum + rSub.iSum;
    const lSum = Math.max(lSub.lSum, lSub.iSum + rSub.lSum);
    const rSum = Math.max(rSub.rSum, rSub.iSum + lSub.rSum);
    const mSum = Math.max(lSub.mSum, rSub.mSum, lSub.rSum + rSub.lSum);

    return new Status(lSum, rSum, mSum, iSum);
}

function maxSubArray(nums: number[]): number {
    return getInfo(nums, 0, nums.length - 1).mSum;
}
