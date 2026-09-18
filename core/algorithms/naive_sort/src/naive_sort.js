// naive_sort — Módulo Naive Sort con ordenamientos elementales
//
// Especificación: 05_Naive_Sort
//
// Funciones del contrato (number[] -> number[]), de menor a mayor:
//   selectionSort  — encuentra el mínimo del tramo no ordenado y lo ubica al inicio
//   bubbleSort     — compara e intercambia adyacentes, con bandera `swapped`
//   insertionSort  — inserta cada elemento en su sub-array ordenado
//
// Caso nulo: en JavaScript un array puede ser `null`, así que el indicador de
// fallo es devolver `null` cuando la entrada es nula, sin lanzar excepciones.

module.exports = {
    selectionSort,
    bubbleSort,
    insertionSort
};

function selectionSort(arr) {
    if (arr == null) return null;
    const n = arr.length;
    if (n <= 1) return arr;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

function bubbleSort(arr) {
    if (arr == null) return null;
    const n = arr.length;
    if (n <= 1) return arr;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

function insertionSort(arr) {
    if (arr == null) return null;
    const n = arr.length;
    if (n <= 1) return arr;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
