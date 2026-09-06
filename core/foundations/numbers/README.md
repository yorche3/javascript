# Numbers — JavaScript

Implementación de la especificación [04_Numbers](https://yorche3.github.io/programming_languages/core/foundations/04_Numbers/) en **JavaScript**, usando **npm** y **Jest**.

Tres enfoques de implementación para los mismos 5 algoritmos: **recursivo directo** (`_rec`), **recursivo con acumulador** (`_acc`) e **iterativo** (`_ite`).

---

## 📂 Archivos y estructura / Files & Structure

| Archivo | Propósito |
| ------- | --------- |
| [`package.json`](package.json) | Manifiesto npm — script `test` y dependencia de desarrollo `jest`. |
| [`jest.config.js`](jest.config.js) | Configuración de Jest — `testEnvironment: "node"` y búsqueda en `test/**/*.test.js`. |
| [`src/numbers.js`](src/numbers.js) | Módulo `numbers` — 15 funciones (3 enfoques × 5 algoritmos) + 4 helpers privados (no exportados). |
| [`test/numbers.rec.test.js`](test/numbers.rec.test.js) | 11 pruebas para el enfoque recursivo directo. |
| [`test/numbers.ite.test.js`](test/numbers.ite.test.js) | 11 pruebas para el enfoque iterativo. |
| [`.gitignore`](.gitignore) | Ignora `node_modules/`. |

**Estructura de directorios esperada:**

```text
numbers/
├── package.json                     # Manifiesto npm + dependencias
├── jest.config.js                   # Configuración de Jest
├── .gitignore                       # Ignora node_modules/
├── src/
│   └── numbers.js                   # 15 funciones + 4 helpers privados
├── test/
│   ├── numbers.rec.test.js          # Tests recursivos (11 casos)
│   └── numbers.ite.test.js          # Tests iterativos (11 casos)
└── node_modules/                    # Generado por npm install (no versionado)
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** Sigue el mismo patrón que [`calculator`](../unit_test/calculator/): proyecto npm + Jest con layout `src/` + `test/`. Las 15 funciones se organizan en 3 grupos por enfoque:

| Enfoque | Sufijo | Ejemplo | ¿Tiene tests directos? |
| ------- | ------ | ------- | :---------------------: |
| Recursivo directo | `...Rec` | `fibonacciRec(n)` | ✅ Sí |
| Recursivo con acumulador | `...Acc` | `fibonacciAcc(n)` | ❌ No (ver nota TCO) |
| Iterativo | `...Ite` | `fibonacciIte(n)` | ✅ Sí |

**EN:** Follows the same pattern as [`calculator`](../unit_test/calculator/): an npm + Jest project with `src/` + `test/` layout. The 15 functions are organized into 3 groups by approach:

| Approach | Suffix | Example | Direct tests? |
| -------- | ------ | ------- | :-----------: |
| Direct recursion | `...Rec` | `fibonacciRec(n)` | ✅ Yes |
| Accumulator recursion | `...Acc` | `fibonacciAcc(n)` | ❌ No (see TCO note) |
| Iterative | `...Ite` | `fibonacciIte(n)` | ✅ Yes |

---

## 📄 Archivos de configuración clave / Key Configuration Files

### `src/numbers.js` — Implementación

**ES:** Cada algoritmo tiene 3 implementaciones en un único archivo. Los helpers son funciones **no exportadas** (privadas del módulo). Por ejemplo, `fibonacci`:

**EN:** Each algorithm has 3 implementations in a single file. Helpers are **non-exported** functions (private to the module). For example, `fibonacci`:

```javascript
// Enfoque recursivo directo / Direct recursion
const fibonacciRec = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
};

// Enfoque con acumulador / Accumulator recursion
const fibonacciAcc = (n) => fibonacciAccHelp(n, 0, 1);

// Helper privado con acumulador / Private accumulator helper
const fibonacciAccHelp = (n, acc2, acc1) => {
    if (n <= 0) {
        return acc2;
    }
    if (n <= 2) {
        return acc1 + acc2;
    }
    return fibonacciAccHelp(n - 1, acc1, acc1 + acc2);
};

// Enfoque iterativo / Iterative
const fibonacciIte = (n) => {
    if (n <= 1) {
        return n;
    }
    let acc2 = 0;
    let acc1 = 1;
    for (let i = 2; i <= n; i++) {
        const temp = acc1 + acc2;
        acc2 = acc1;
        acc1 = temp;
    }
    return acc1;
};
```

| Algoritmo | `_rec` | `_acc` | `_ite` |
| --------- | ------ | ------ | ------ |
| `sumOfFirstN` | `n + sumRec(n-1)` | helper con `acc + n` | bucle `1..n` |
| `factorial` | `n * factRec(n-1)` | helper con `acc * n` | bucle `2..n` |
| `fibonacci` | `fibRec(n-1) + fibRec(n-2)` | helper con `acc2, acc1` | bucle de intercambio |
| `greatestCommonDivisor` | Euclides recursivo | Euclides helper | Euclides con `while (b !== 0)` |
| `leastCommonMultiple` | `(a*b) / gcdRec` | `(a*b) / gcdAcc` | `(a*b) / gcdIte` |

### `test/numbers.rec.test.js` y `test/numbers.ite.test.js` — Pruebas

**ES:** Un `test` por caso (11 por suite, 22 en total), con los valores de la tabla de casos de prueba de la especificación.

**EN:** One `test` per case (11 per suite, 22 in total), with the values from the specification's test case table.

```javascript
test("fibonacciRec(6) should equal 8", () => {
    expect(fibonacciRec(6)).toBe(8);
});
```

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- **Node.js 18+** (`node`).
- **npm** (`npm`).

### Instalar dependencias / Install dependencies

```bash
cd javascript/core/foundations/numbers
npm install
```

### Ejecutar las pruebas unitarias / Run tests

```bash
npm test
```

### Salida esperada / Expected output

```text
Test Suites: 2 passed, 2 total
Tests:       22 passed, 22 total
```

---

## 🔁 Sobre recursión con acumulador y Tail Call Optimization (TCO)

**ES:**
Tail recursion ocurre cuando la llamada recursiva es la última acción que ejecuta una función; después de la llamada no hay más instrucciones. La recursión con acumulador consigue esto pasando el estado previo como parámetro, sin dejar trabajo pendiente en la pila.

En JavaScript, **no se garantiza TCO**: la optimización de llamadas de cola (*proper tail calls*, parte de ES2015) solo está implementada en JavaScriptCore (Safari), no en V8 (Node.js/Chrome). Por ello, la versión con acumulador se conserva únicamente con fines educativos, como puente conceptual entre la recursión directa (`_rec`) y la versión iterativa (`_ite`). Como no hay un beneficio práctico de rendimiento garantizado, **no se desarrollan pruebas unitarias específicas para las funciones `_acc`**. Su comportamiento queda validado a través de las suites recursiva e iterativa, que ejercitan los mismos resultados.

**EN:**
Tail recursion occurs when the recursive call is the last action executed by a function; after the call there are no more instructions. Accumulator recursion achieves this by passing the previous state as a parameter, leaving no pending work on the stack.

In JavaScript, **TCO is not guaranteed**: tail-call optimization (*proper tail calls*, part of ES2015) is only implemented in JavaScriptCore (Safari), not in V8 (Node.js/Chrome). Therefore, the accumulator version is kept purely for educational purposes, as a conceptual bridge between direct recursion (`_rec`) and the iterative version (`_ite`). Since there is no guaranteed performance benefit, **no dedicated unit tests are written for the `_acc` functions**. Their behavior is validated through the recursive and iterative suites, which exercise the same results.

---

## 📝 Notas de implementación / Implementation Notes

**ES:** El proyecto no define un punto de entrada manual: el "runner" es Jest a través de `npm test`, que descubre y ejecuta las suites automáticamente según `jest.config.js`.

**EN:** The project defines no manual entry point: the "runner" is Jest through `npm test`, which discovers and executes the suites automatically per `jest.config.js`.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
