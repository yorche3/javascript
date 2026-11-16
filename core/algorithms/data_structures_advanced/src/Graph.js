import { Node } from './Node.js';

class GraphNode extends Node {
    /** @param {number} label */
    constructor(label) {
        super(label);
        this.neighbors = [];
        this.nextVertex = null;
    }
}

export class Graph {

    #vertices = null;
    #vertexCount = 0;
    #edgeCount = 0;

    constructor() {}

    #findVertex(label) {
        let current = this.#vertices;
        while (current !== null) {
            if (current.value === label) {
                return current;
            }
            current = current.nextVertex;
        }
        return null;
    }

    /**
     * @param {number} label
     * @returns {boolean} True for an insertion, including a duplicate.
     */
    addVertex(label) {
        if (this.#findVertex(label) !== null) {
            return true;
        }
        const newVertex = new GraphNode(label);
        newVertex.nextVertex = this.#vertices;
        this.#vertices = newVertex;
        this.#vertexCount++;
        return true;
    }

    /**
     * @param {number} u
     * @param {number} v
     * @returns {boolean} True if both vertices exist, including duplicate edges and loops.
     */
    addEdge(u, v) {
        const vertexU = this.#findVertex(u);
        if (vertexU === null || this.#findVertex(v) === null) {
            return false;
        }
        const  neighbors = vertexU.neighbors;
        if (neighbors.includes(v)) {
            return true;
        }
        neighbors.push(v);
        this.#edgeCount++;
        return true;
    }

    /**
     * @param {number} u
     * @param {number} v
     * @returns {boolean} True if the directed edge exists; false otherwise.
     */
    hasEdge(u, v) {
        const vertexU = this.#findVertex(u);
        if (vertexU === null) {
            return false;
        }
        return vertexU.neighbors.includes(v);
    }

    /**
     * @param {number} u
     * @returns {number[] | null} An independent sorted copy, or null if the vertex is absent.
     */
    getNeighbors(u) {
        const vertexU = this.#findVertex(u);
        if (vertexU === null) {
            return null;
        }
        return [...vertexU.neighbors].sort((a, b) => a - b);
    }

    /** @returns {boolean} True if the graph has no vertices. */
    get isEmpty() {
        return this.#vertexCount === 0;
    }

    /** @returns {number} Number of vertices. */
    get vertexCount() {
        return this.#vertexCount;
    }

    /** @returns {number} Number of distinct directed edges. */
    get edgeCount() {
        return this.#edgeCount;
    }
}
