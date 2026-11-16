import { Node } from './Node.js';

export class TreeNode extends Node {

    #left = null;
    #right = null;

    /** @param {number} value */
    constructor(value) {
        super(value);
    }

    /** @returns {TreeNode | null} The left child, or null if absent. */
    get left() {
        return this.#left;
    }

    /** @returns {TreeNode | null} The right child, or null if absent. */
    get right() {
        return this.#right;
    }

    /** @param {TreeNode | null} node */
    set left(node) {
        this.#left = node;
    }

    /** @param {TreeNode | null} node */
    set right(node) {
        this.#right = node;
    }
}
