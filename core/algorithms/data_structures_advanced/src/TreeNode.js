import { Node } from './Node.js';

export class TreeNode extends Node {
    /** @param {number} value */
    constructor(value) {
        super(value);
    }

    /** @returns {TreeNode | null} The left child, or null if absent. */
    get left() {
        return null;
    }

    /** @returns {TreeNode | null} The right child, or null if absent. */
    get right() {
        return null;
    }

    /** @param {TreeNode | null} node */
    set left(node) {}

    /** @param {TreeNode | null} node */
    set right(node) {}
}
