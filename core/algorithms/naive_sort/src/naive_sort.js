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
