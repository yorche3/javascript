# Naive Sort — JavaScript

Implementación de la especificación [05_Naive_Sort](https://yorche3.github.io/programming_languages/core/algorithms/05_Naive_Sort/) en **JavaScript**, ejecutado con **Node.js** y probado con **Jest** mediante **npm**.

Los tres algoritmos elementales de ordenamiento ($O(n^2)$) — **Selection Sort**, **Bubble Sort** e **Insertion Sort** — trabajan **in-place** sobre `number[]` y no invocan ninguna biblioteca de ordenamiento: sólo comparaciones e intercambios paso a paso, sin usar `Array.prototype.sort`.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo | Propósito |
| ------- | --------- |
| [`package.json`](package.json) | Manifiesto npm — script `test` y dependencia de desarrollo `jest`. |
| [`package-lock.json`](package-lock.json) | Árbol de dependencias exacto generado por `npm install`. |
| [`jest.config.js`](jest.config.js) | Configuración de Jest — `testEnvironment: "node"` y búsqueda en `test/**/*.test.js`. |
| [`src/naive_sort.js`](src/naive_sort.js) | Módulo `naive_sort` — las 3 funciones del contrato. |
| [`test/naive_sort.test.js`](test/naive_sort.test.js) | 3 pruebas con `test()`: 8 casos cada una (7 de la especificación + el nulo). |
| [`.gitignore`](.gitignore) | Ignora `node_modules/`. |

**Estructura de directorios esperada:**

```text
naive_sort/
├── package.json                     # Manifiesto npm + dependencias
├── package-lock.json                # Árbol de dependencias exacto
├── jest.config.js                   # Configuración de Jest
├── .gitignore                       # Ignora node_modules/
├── src/
│   └── naive_sort.js                # 3 funciones del contrato
├── test/
│   └── naive_sort.test.js           # 3 tests × 8 casos
└── node_modules/                    # Generado por npm install (no versionado)
```

A diferencia de `foundations/numbers/`, que reparte sus enfoques en dos archivos de prueba (`numbers.rec.test.js`, `numbers.ite.test.js`), aquí los tres algoritmos comparten un único contrato `number[] -> number[]` y una única tabla de casos, así que un solo archivo recorre los tres con un helper común.

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El paquete se inicializó con `npm init` y después se alineó con los módulos hermanos `foundations/numbers/` y `foundations/unit_test/calculator/`.

**EN:** The package was initialised with `npm init` and then aligned with its sibling modules `foundations/numbers/` and `foundations/unit_test/calculator/`.

### Inicialización / Initialization

```bash
npm init
npm install --save-dev jest
mkdir -p src test
```

---

## 📄 Archivos de configuración clave / Key Configuration Files

### `package.json` — Manifiesto npm

**ES:** Declara el punto de entrada (`main`), el script `test` que invoca Jest en modo descubrimiento y `jest` como única dependencia de desarrollo, con el mismo rango que usa `numbers/`.

**EN:** It declares the entry point (`main`), the `test` script that runs Jest in discovery mode, and `jest` as the single dev dependency, with the same range as `numbers/`.

```json
{
  "name": "naive_sort",
  "version": "1.0.0",
  "main": "src/naive_sort.js",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^30.0.5"
  }
}
```

### `jest.config.js` — Configuración de Jest

**ES:** Fija el entorno a Node y restringe el descubrimiento a los archivos `*.test.js` dentro de `test/`.

**EN:** It pins the environment to Node and restricts discovery to `*.test.js` files inside `test/`.

```javascript
module.exports = {
    testEnvironment: "node",
    testMatch: ["**/test/**/*.test.js"]
};
```

### `.gitignore` — Archivos ignorados

```gitignore
node_modules/
```

**ES:** `node_modules/` es el único artefacto ignorado; `package-lock.json` **sí se versiona**, igual que en `numbers/` y `calculator/`, para que las instalaciones sean reproducibles. Verificado con `git check-ignore -v node_modules/jest/package.json` → `.gitignore:1:node_modules/`.

**EN:** `node_modules/` is the only ignored artifact; `package-lock.json` **is committed**, as in `numbers/` and `calculator/`, so that installs are reproducible. Verified with `git check-ignore -v node_modules/jest/package.json` → `.gitignore:1:node_modules/`.

---

## 🚀 Compilación y ejecución / Build & Run

### Instalar dependencias / Install dependencies

```bash
npm install
```

### Ejecutar pruebas unitarias / Run tests

```bash
npm test
```

**Salida real / Actual output:**

```text
$ node --check src/naive_sort.js
$ node --check test/naive_sort.test.js
$ node --check jest.config.js

$ npm test

> naive_sort@1.0.0 test
> jest

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.208 s
Ran all test suites.
```

> **ES:** JavaScript no tiene compilador ni linter configurado en este módulo (`numbers/` tampoco lo tiene), así que la verificación estática se hace con `node --check`, que valida la sintaxis de los tres archivos sin ejecutarlos: no emite ninguna salida y devuelve 0. La suite ejecuta **24 aserciones**: 3 algoritmos × 8 casos (7 de la especificación + el nulo).
>
> **EN:** JavaScript has no compiler or configured linter in this module (neither does `numbers/`), so static verification is done with `node --check`, which validates the syntax of the three files without executing them: it prints nothing and returns 0. The suite runs **24 assertions**: 3 algorithms × 8 cases (the 7 specification ones + the null one).

---

## 🧠 Algoritmos y operaciones / Algorithms & Operations

| Algoritmo | Estrategia | Complejidad | In-place |
|-----------|------------|-------------|:--------:|
| `selectionSort` | Busca el mínimo del tramo no ordenado y lo intercambia al inicio, con la guarda `minIndex !== i` | $O(n^2)$ siempre | ✅ |
| `bubbleSort` | Compara e intercambia adyacentes por pasadas, con **salida temprana** mediante la bandera `swapped` | $O(n^2)$ peor/promedio, $O(n)$ mejor | ✅ |
| `insertionSort` | Inserta cada elemento en el sub-array ya ordenado desplazando los mayores | $O(n^2)$ peor/promedio, $O(n)$ mejor | ✅ |

### Casos cubiertos / Covered cases

| Caso | Entrada | Salida esperada |
|------|---------|-----------------|
| Array estándar desordenado | `[5, 2, 9, 1, 5, 6]` | `[1, 2, 5, 5, 6, 9]` |
| Array ya ordenado | `[1, 2, 3, 4, 5]` | `[1, 2, 3, 4, 5]` |
| Array en orden inverso | `[5, 4, 3, 2, 1]` | `[1, 2, 3, 4, 5]` |
| Elementos idénticos | `[7, 7, 7, 7]` | `[7, 7, 7, 7]` |
| Con números negativos | `[3, -1, 4, -5, 0]` | `[-5, -1, 0, 3, 4]` |
| Un solo elemento | `[42]` | `[42]` |
| Array vacío | `[]` | `[]` |
| **Entrada nula** | `null` | `null` |

---

## 📝 Notas de implementación / Implementation Notes

### 🧬 Ordenamiento *in-place* con intercambio por destructuring / In-place sorting with a destructuring swap

**ES:** El pseudocódigo ordena el propio array con `swap(arr, i, j)`, y JavaScript lo permite literalmente: los arrays son mutables y se pasan por referencia, así que las tres funciones modifican el array recibido y devuelven el mismo objeto. El intercambio se escribe con la asignación por destructuring `[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]`, que evita la variable temporal y es el idioma actual del lenguaje.

Como los *fixtures* de la suite son constantes de módulo y los arrays de JavaScript son mutables, cada caso ordena una **copia** creada con `[...input]`. Sin ese aislamiento, el primer algoritmo dejaría los datos ordenados y los siguientes pasarían con entradas ya resueltas.

**EN:** The pseudocode sorts the array itself with `swap(arr, i, j)`, and JavaScript allows it literally: arrays are mutable and passed by reference, so all three functions modify the received array and return the same object. The swap is written with destructuring assignment `[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]`, which avoids the temporary variable and is the language's current idiom.

Since the suite's fixtures are module-level constants and JavaScript arrays are mutable, each case sorts a **copy** created with `[...input]`. Without that isolation, the first algorithm would leave the data sorted and the following ones would pass with already-solved inputs.

### 🆗 Indicador de fallo con `null` / Failure indicator via `null`

**ES:** Los tres algoritmos empiezan con `if (arr == null) return null;` y devuelven `null` como indicador de fallo, sin lanzar excepciones. La comparación es deliberadamente **no estricta**: `arr == null` es el idioma de JavaScript que cubre a la vez `null` y `undefined`, que son las dos formas en que puede llegar una entrada inválida. El caso nulo se prueba de forma explícita y separada del caso vacío, porque `null` y `[]` son valores distintos.

**EN:** All three algorithms start with `if (arr == null) return null;` and return `null` as the failure indicator, without throwing exceptions. The comparison is deliberately **non-strict**: `arr == null` is the JavaScript idiom that covers both `null` and `undefined`, the two ways an invalid input can arrive. The null case is tested explicitly and separately from the empty case, because `null` and `[]` are different values.

### 🔁 La bandera `swapped` con `break` / The `swapped` flag with `break`

**ES:** El criterio de aceptación exige conservar la optimización de salida temprana. Se implementa con `let swapped = false;` dentro del bucle externo y `if (!swapped) break;` al terminarlo, exactamente como el pseudocódigo: en cuanto una pasada completa no realiza ningún intercambio, el bucle termina y un array ya ordenado se resuelve en **una sola pasada** ($O(n)$ en el mejor caso).

**EN:** The acceptance criteria require preserving the early-exit optimization. It is implemented with `let swapped = false;` inside the outer loop and `if (!swapped) break;` when it finishes, exactly as in the pseudocode: as soon as a full pass performs no swap, the loop ends and an already sorted array is resolved in **a single pass** ($O(n)$ best case).

### ➿ Cotas de los bucles / Loop bounds

**ES:** La implementación reproduce las cotas del pseudocódigo tal cual: `for (let i = 0; i < n - 1; i++)` con `for (let j = i + 1; j < n; j++)` en `selectionSort`, y `for (let j = 0; j < n - i - 1; j++)` en `bubbleSort`, cuya pasada se acorta en cada iteración. El caso base `n <= 1` del pseudocódigo se resuelve con la guarda `if (n <= 1) return arr;` de cada función.

**EN:** The implementation reproduces the pseudocode's bounds as-is: `for (let i = 0; i < n - 1; i++)` with `for (let j = i + 1; j < n; j++)` in `selectionSort`, and `for (let j = 0; j < n - i - 1; j++)` in `bubbleSort`, whose pass shortens on each iteration. The pseudocode's `n <= 1` base case is handled by each function's `if (n <= 1) return arr;` guard.

### 🔀 Estabilidad de `insertionSort` / `insertionSort` stability

**ES:** El bucle interno desplaza mientras `arr[j] > key` (estrictamente mayor), así que un elemento igual no se mueve y la ordenación es **estable**.

**EN:** The inner loop shifts while `arr[j] > key` (strictly greater), so an equal element does not move and the sort is **stable**.

### 🏷️ Naming, visibilidad y estilo / Naming, visibility and style

**ES:** La especificación nombra las funciones en `snake_case` (`selection_sort`); JavaScript y el módulo hermano `numbers/` usan `camelCase`, así que la API es `selectionSort`, `bubbleSort` e `insertionSort`. Las tres se declaran con `function` y se exportan en un único `module.exports` al principio del archivo, que funciona gracias al *hoisting* de las declaraciones de función; el módulo exporta sólo esas tres, sin helpers auxiliares.

Es la única diferencia de estilo respecto a `numbers/`, que declara sus funciones como `const f = (...) => {...}`. Ambas formas son idiomáticas; aquí se prefiere la declaración de función para poder colocar el `module.exports` delante. `require("../src/naive_sort")` resuelve el archivo sin extensión gracias a la resolución de CommonJS.

**EN:** The specification names the functions in `snake_case` (`selection_sort`); JavaScript and the sibling `numbers/` module use `camelCase`, so the API is `selectionSort`, `bubbleSort` and `insertionSort`. All three are declared with `function` and exported in a single `module.exports` at the top of the file, which works thanks to function declaration hoisting; the module exports only those three, with no auxiliary helpers.

This is the only style difference from `numbers/`, which declares its functions as `const f = (...) => {...}`. Both forms are idiomatic; a function declaration is preferred here so the `module.exports` can sit first. `require("../src/naive_sort")` resolves the file without an extension thanks to CommonJS resolution.

### 🧪 Estructura de los tests / Test structure

**ES:** La suite sigue el mismo patrón que los demás lenguajes:

- **Constantes con nombre** para cada entrada y salida esperada (`standardInput`, `standardOutput`, `reverseInput`, …), sin duplicar literales.
- Una **tabla de casos** (`cases`) con descripción, entrada y salida esperada.
- Un **helper compartido** `assertSortsAllCases(sort, algorithm)` que recibe la función a probar y el nombre del algoritmo, y recorre los 8 casos.
- **Un test por función** del contrato: `test("selection_sort", ...)`, `test("bubble_sort", ...)` y `test("insertion_sort", ...)`.
- **Aislamiento**: cada caso ordena una copia del fixture (`[...input]`), porque los algoritmos ordenan *in-place*.

Para que el fallo lleve el mensaje `"{algorithm} should sort {case}"` se registra un matcher propio con `expect.extend`, porque Jest no acepta un mensaje como argumento de `expect()`. El helper hace `expect(sort(copia)).toBeSortedAs(expected, mensaje)` y el matcher reutiliza `this.equals` para comparar los arrays y `this.utils.printExpected` / `printReceived` para el diff. Un error se ve así:

**EN:** The suite follows the same pattern as the other languages:

- **Named constants** for every input and expected output (`standardInput`, `standardOutput`, `reverseInput`, …), with no duplicated literals.
- A **case table** (`cases`) with description, input and expected output.
- A **shared helper** `assertSortsAllCases(sort, algorithm)` that receives the function under test and the algorithm name, and walks the 8 cases.
- **One test per contract function**: `test("selection_sort", ...)`, `test("bubble_sort", ...)` and `test("insertion_sort", ...)`.
- **Isolation**: each case sorts a copy of the fixture (`[...input]`), because the algorithms sort in place.

A custom matcher is registered with `expect.extend` so that failures carry the `"{algorithm} should sort {case}"` message, because Jest does not accept a message argument on `expect()`. The helper calls `expect(sort(copy)).toBeSortedAs(expected, message)` and the matcher reuses `this.equals` to compare the arrays and `this.utils.printExpected` / `printReceived` for the diff. A failure looks like this:

```text
  ● selection_sort
    selection_sort should sort an unsorted array
      expected: [1, 2, 5, 5, 6, 9]
      received: [9, 6, 5, 5, 2, 1]
```

### 📍 Desviaciones respecto a la ubicación esperada / Deviations from the expected location

| Especificación | Implementación | Motivo |
|----------------|----------------|--------|
| `src/naive_sort.ext` | `src/naive_sort.js` | `src/` y el nombre coinciden; la extensión es la del lenguaje, igual que en `numbers/`. |
| `test/naive_sort_test.ext` | `test/naive_sort.test.js` | La convención de Jest del repositorio es `*.test.js`, como `numbers.rec.test.js` en `numbers/`. |
| `test/run_tests.ext` | *(no existe)* | `npm test` ejecuta `jest`, que descubre los archivos `*.test.js`; no se necesita punto de entrada. |

**ES:** Este proyecto también está implementado en otros lenguajes. Explora el repositorio principal para consultar las demás versiones.

**EN:** This project is also implemented in other languages. Explore the main repository to see the other versions.

---

*[← Volver a Algoritmos Puros](../README.md) · [↑ Volver a Core](../../README.md)*

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
