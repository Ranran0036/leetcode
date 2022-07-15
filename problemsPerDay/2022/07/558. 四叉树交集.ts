/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

import Node from "../../../structures/Node_";

function intersect(quadTree1: Node | null, quadTree2: Node | null): Node | null {
    if (quadTree1?.isLeaf) {
        if (quadTree1.val) {
            return new Node(true, true);
        }
        return new Node(quadTree2?.val, quadTree2?.isLeaf, quadTree2?.topLeft!, quadTree2?.topRight!, quadTree2?.bottomLeft!, quadTree2?.bottomRight!);
    }

    if (quadTree2?.isLeaf) {
        return intersect(quadTree2, quadTree1);
    }

    const o1 = intersect(quadTree1?.topLeft!, quadTree2?.topLeft!);
    const o2 = intersect(quadTree1?.topRight!, quadTree2?.topRight!);
    const o3 = intersect(quadTree1?.bottomLeft!, quadTree2?.bottomLeft!);
    const o4 = intersect(quadTree1?.bottomRight!, quadTree2?.bottomRight!);

    if (o1!.isLeaf && o2!.isLeaf && o3!.isLeaf && o4!.isLeaf && o1!.val === o2!.val && o1!.val === o3!.val && o1!.val === o4!.val) {
        return new Node(o1!.val, true);
    }
    return new Node(false, false, o1!, o2!, o3!, o4!);
}
