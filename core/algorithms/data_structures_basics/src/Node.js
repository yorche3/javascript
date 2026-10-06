/**
 * node — celda enlazada compartida por LinkedList, Stack y Queue.
 *
 * Especificación: 06_Data_Structures_Basics.
 * Contrato del paso 4b: tipos nuevos y firmas; el algoritmo es del paso 5.
 *
 * Indicadores: solo el enlace de un Node puede ser null (`next`); el resto de las
 * operaciones devuelve -1 (números), false (banderas) o 0 (contadores).
 *
 * El init del contrato es el constructor: new Node(value) fija el valor y deja el
 * enlace ausente.
 */
export class Node {
    #value;
    #next;

    /**
     * @param {number} value
     */
    constructor(value) {
        this.#value = value;
        this.#next = null;
    }

    /** @returns {number} valor de la celda (get_value) */
    get value() { return this.#value; }

    /** @returns {Node | null} enlace de la celda, o null cuando está ausente (get_next) */
    get next() { return this.#next; }

    /** @param {Node | null} node actualiza el enlace de la celda (set_next) */
    set next(node) { this.#next = node; }
}
