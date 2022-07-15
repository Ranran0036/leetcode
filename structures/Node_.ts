export default class Node_ {
    val: boolean;
    isLeaf: boolean;
    topLeft: Node_ | null;
    topRight: Node_ | null;
    bottomLeft: Node_ | null;
    bottomRight: Node_ | null;
    constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node_, topRight?: Node_, bottomLeft?: Node_, bottomRight?: Node_) {
        this.val = val === undefined ? false : val;
        this.isLeaf = isLeaf === undefined ? false : isLeaf;
        this.topLeft = topLeft === undefined ? null : topLeft;
        this.topRight = topRight === undefined ? null : topRight;
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
        this.bottomRight = bottomRight === undefined ? null : bottomRight;
    }
}
