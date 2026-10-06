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
        return this.#front != null ? this.#front.value : -1;
    }

    /** @returns {boolean} informa si la cola no tiene nodos (is_empty) */
    get isEmpty() {
        return this.#count == 0;
    }

    /** @returns {number} número de nodos de la cola (size) */
    get size() {
        return this.#count;
    }

    /**
     * Añade el valor por el final de la cola (enqueue).
     * @param {number} value
     */
    enqueue(value) {
        const newNode = new Node(value);
        if (this.#rear == null) {
            this.#front = newNode;
            this.#rear = newNode;
        } else {
            this.#rear.next = newNode;
            this.#rear = newNode;
        }
        this.#count++;
    }

    /**
     * Extrae el frente de la cola (dequeue).
     * @returns {number} el valor extraído, o -1 si la cola está vacía
     */
    dequeue() {
        if (this.#front == null) {
            return -1;
        }
        const value = this.#front.value;
        this.#front = this.#front.next;
        if (this.#front == null) {
            this.#rear = null;
        }
        this.#count--;
        return value;
    }
}
