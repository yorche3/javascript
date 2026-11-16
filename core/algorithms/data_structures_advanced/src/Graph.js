import { Node } from './Node.js';

class GraphNode extends Node {
    /** @param {number} label */
    constructor(label) {
        super(label);
    }
}

export class Graph {
    constructor() {}

    /**
     * @param {number} label
     * @returns {boolean} True for an insertion, including a duplicate.
     */
    addVertex(label) {
        return false;
    }

    /**
     * @param {number} u
     * @param {number} v
     * @returns {boolean} True if both vertices exist, including duplicate edges and loops.
     */
    addEdge(u, v) {
        return false;
    }

    /**
     * @param {number} u
     * @param {number} v
     * @returns {boolean} True if the directed edge exists; false otherwise.
     */
    hasEdge(u, v) {
        return false;
    }

    /**
     * @param {number} u
     * @returns {number[] | null} An independent sorted copy, or null if the vertex is absent.
     */
    getNeighbors(u) {
        return null;
    }

    /** @returns {boolean} True if the graph has no vertices. */
    get isEmpty() {
        return false;
    }

    /** @returns {number} Number of vertices. */
    get vertexCount() {
        return 0;
    }

    /** @returns {number} Number of distinct directed edges. */
    get edgeCount() {
        return 0;
    }
}
