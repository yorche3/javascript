const { selectionSort, bubbleSort, insertionSort } = require("../src/naive_sort");

// Casos de prueba de la especificación 05_Naive_Sort.md
const standardInput = [5, 2, 9, 1, 5, 6];
const standardOutput = [1, 2, 5, 5, 6, 9];

const sortedInput = [1, 2, 3, 4, 5];
const sortedOutput = [1, 2, 3, 4, 5];

const reverseInput = [5, 4, 3, 2, 1];
const reverseOutput = [1, 2, 3, 4, 5];

const identicalInput = [7, 7, 7, 7];
const identicalOutput = [7, 7, 7, 7];

const negativeInput = [3, -1, 4, -5, 0];
const negativeOutput = [-5, -1, 0, 3, 4];

const singleInput = [42];
const singleOutput = [42];

const emptyInput = [];
const emptyOutput = [];

// Matcher propio: Jest no acepta un mensaje como argumento de expect(), así que
// se registra uno para poder adjuntar "{algoritmo} should sort {caso}" al fallo.
expect.extend({
    toBeSortedAs(actual, expected, message) {
        return {
            pass: this.equals(actual, expected),
            message: () =>
                `${message}\n` +
                `  expected: ${this.utils.printExpected(expected)}\n` +
                `  received: ${this.utils.printReceived(actual)}`
        };
    }
});

const cases = [
    { description: "an unsorted array", input: standardInput, expected: standardOutput },
    { description: "an already sorted array", input: sortedInput, expected: sortedOutput },
    { description: "a reverse ordered array", input: reverseInput, expected: reverseOutput },
    { description: "an array of identical elements", input: identicalInput, expected: identicalOutput },
    { description: "an array with negative numbers", input: negativeInput, expected: negativeOutput },
    { description: "a single element array", input: singleInput, expected: singleOutput },
    { description: "an empty array", input: emptyInput, expected: emptyOutput },
    { description: "a null input", input: null, expected: null }
];

// Helper compartido: recibe la función a probar y el nombre del algoritmo, y
// ejecuta todos los casos con un mensaje descriptivo cada uno.
// Caso nulo incluido: `null` es el indicador de fallo del contrato.
// Cada caso ordena una copia del fixture, porque los algoritmos pueden ordenar
// in-place y los arrays de JavaScript son mutables.
const assertSortsAllCases = (sort, algorithm) => {
    cases.forEach(({ description, input, expected }) => {
        const inputCopy = input === null ? null : [...input];
        expect(sort(inputCopy)).toBeSortedAs(
            expected,
            `${algorithm} should sort ${description}`
        );
    });
};

test("selection_sort", () => {
    assertSortsAllCases(selectionSort, "selection_sort");
});

test("bubble_sort", () => {
    assertSortsAllCases(bubbleSort, "bubble_sort");
});

test("insertion_sort", () => {
    assertSortsAllCases(insertionSort, "insertion_sort");
});
