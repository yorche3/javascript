import { TreeNode } from './TreeNode.js';

export class BinaryTree {

    #root = null;
    #count = 0;

    constructor() {}

    /**
     * @param {number} value
     * @returns {boolean} True for an insertion, including a duplicate.
     */
    insert(value) {
        if (this.#root === null) {
            this.#root = new TreeNode(value);
            this.#count++;
            return true;
        }
        let current = this.#root;
        while (true) {
            if (value === current.value) {
                return true;
            }
            if (value < current.value) {
                if (current.left === null) {
                    current.left = new TreeNode(value);
                    this.#count++;
                    return true;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = new TreeNode(value);
                    this.#count++;
                    return true;
                }
                current = current.right;
            }
        }
    }

    /**
     * @param {number} value
     * @returns {boolean} True if present; false otherwise.
     */
    contains(value) {
        let current = this.#root;
        while (current !== null) {
            if (value === current.value) {
                return true;
            }
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    /** @returns {boolean} True if the tree has no nodes. */
    get isEmpty() {
        return this.#count === 0;
    }

    /** @returns {number} Number of distinct values. */
    get size() {
        return this.#count;
    }
}
