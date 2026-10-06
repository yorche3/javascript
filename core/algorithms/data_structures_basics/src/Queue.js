import { Node } from './Node.js';

/**
 * queue — cola FIFO construida a mano sobre Node.
 *
 * Especificación: 06_Data_Structures_Basics.
 * Contrato del paso 4b: firmas con el cuerpo en su indicador natural; el algoritmo
 * es del paso 5 y la suite, del 4c.
 *
 * Indicadores: frontValue y dequeue devuelven -1 si la cola está vacía, isEmpty
 * false y size 0.
 *
 * El init del contrato es el constructor: new Queue() es la cola vacía.
 */
export class Queue {
    #front;
    #rear;
    #count;

    constructor() {
        this.#front = null;
        this.#rear = null;
        this.#count = 0;
    }

    /** @returns {number} valor del frente, o -1 si la cola está vacía (peek) */
    get frontValue() {
        return -1;
    }

    /** @returns {boolean} informa si la cola no tiene nodos (is_empty) */
    get isEmpty() {
        return false;
    }

    /** @returns {number} número de nodos de la cola (size) */
    get size() {
        return 0;
    }

    /**
     * Añade el valor por el final de la cola (enqueue).
     * @param {number} value
     */
    enqueue(value) {
    }

    /**
     * Extrae el frente de la cola (dequeue).
     * @returns {number} el valor extraído, o -1 si la cola está vacía
     */
    dequeue() {
        return -1;
    }
}
