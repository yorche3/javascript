// Contract stubs: operation bodies are implemented in the next phase.
export class Node {

    #value;
    
    /** @param {number} value */
    constructor(value) {
        this.#value = value;
    }

    /** @returns {number} The node's value. */
    get value() {
        return this.#value;
    }
}
