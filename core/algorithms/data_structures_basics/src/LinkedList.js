import { Node } from './Node.js';

/**
 * linked_list — lista enlazada construida a mano sobre Node.
 *
 * Especificación: 06_Data_Structures_Basics.
 * Contrato del paso 4b: firmas con el cuerpo en su indicador natural; el algoritmo
 * es del paso 5 y la suite, del 4c.
 *
 * Indicadores: headValue devuelve -1 si la lista está vacía, delete false cuando el
 * valor no está, isEmpty false y size 0.
 *
 * El init del contrato es el constructor: new LinkedList() es la lista vacía.
 */
export class LinkedList {
    #head;
    #tail;
    #count;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    /** @returns {number} valor de la cabeza, o -1 si la lista está vacía (get_head) */
    get headValue() {
        return this.#head != null ? this.#head.value : -1;
    }

    /** @returns {boolean} informa si la lista no tiene nodos (is_empty) */
    get isEmpty() {
        return this.#count == 0;
    }

    /** @returns {number} número de nodos de la lista (size) */
    get size() {
        return this.#count;
    }

    /**
     * Inserta el valor al principio de la lista (insert_head).
     * @param {number} value
     */
    insertHead(value) {
        const newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        if (this.#tail == null) {
            this.#tail = newNode;
        }
        this.#count++;
    }

    /**
     * Inserta el valor al final de la lista (insert_tail).
     * @param {number} value
     */
    insertTail(value) {
        const newNode = new Node(value);
        if (this.#tail == null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.#count++;
    }

    /**
     * Elimina la primera aparición del valor (delete).
     * @param {number} value
     * @returns {boolean} false cuando el valor no está
     */
    delete(value) {
        if (this.#head == null) {
            return false;
        }
        if (this.#head.value == value) {
            this.#head = this.#head.next;
            if (this.#head == null) {
                this.#tail = null;
            }
            this.#count--;
            return true;
        }
        let current = this.#head;
        while (current.next != null && current.next.value != value) {
            current = current.next;
        }
        if (current.next == null) {
            return false;
        }
        current.next = current.next.next;
        if (current.next == null) {
            this.#tail = current;
        }
        this.#count--;
        return true;
    }
}
