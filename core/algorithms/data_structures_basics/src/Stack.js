import { Node } from './Node.js';

/**
 * stack — pila LIFO construida a mano sobre Node.
 *
 * Especificación: 06_Data_Structures_Basics.
 * Contrato del paso 4b: firmas con el cuerpo en su indicador natural; el algoritmo
 * es del paso 5 y la suite, del 4c.
 *
 * Indicadores: topValue y pop devuelven -1 si la pila está vacía, isEmpty false y
 * size 0.
 *
 * El init del contrato es el constructor: new Stack() es la pila vacía.
 */
export class Stack {
    #top;
    #count;

    constructor() {
        this.#top = null;
        this.#count = 0;
    }

    /** @returns {number} valor del tope, o -1 si la pila está vacía (peek) */
    get topValue() {
        return -1;
    }

    /** @returns {boolean} informa si la pila no tiene nodos (is_empty) */
    get isEmpty() {
        return false;
    }

    /** @returns {number} número de nodos de la pila (size) */
    get size() {
        return 0;
    }

    /**
     * Apila el valor sobre el tope (push).
     * @param {number} value
     */
    push(value) {
    }

    /**
     * Extrae el tope (pop).
     * @returns {number} el valor extraído, o -1 si la pila está vacía
     */
    pop() {
        return -1;
    }
}
