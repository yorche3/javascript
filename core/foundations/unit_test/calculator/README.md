# Calculator — JavaScript

Implementación de la especificación [03_Unit_Test_Calculator](https://yorche3.github.io/programming_languages/core/foundations/03_Unit_Test_Calculator/) en **JavaScript**, usando **npm** como gestor de dependencias y **Jest** como framework de pruebas unitarias.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo | Propósito |
| ------- | --------- |
| [`package.json`](package.json) | Manifiesto npm — script `test` y dependencia de desarrollo `jest`. |
| [`jest.config.js`](jest.config.js) | Configuración de Jest — `testEnvironment: "node"` y búsqueda en `test/**/*.test.js`. |
| [`src/calculator.js`](src/calculator.js) | Módulo `calculator` con las 5 operaciones aritméticas (CommonJS). |
| [`test/calculator.test.js`](test/calculator.test.js) | 5 pruebas unitarias con `test(...)` y `expect(...).toBe(...)`. |
| [`.gitignore`](.gitignore) | Ignora `node_modules/`. |

**Estructura de directorios esperada:**

```text
calculator/
├── package.json                     # Manifiesto npm + dependencias
├── jest.config.js                   # Configuración de Jest
├── .gitignore                       # Ignora node_modules/
├── src/
│   └── calculator.js                # 5 operaciones aritméticas
├── test/
│   └── calculator.test.js           # 5 tests con Jest
└── node_modules/                    # Generado por npm install (no versionado)
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** Este proyecto usa **npm** + **Jest**, el framework de pruebas más extendido del ecosistema JavaScript:

1. Cada operación de `calculator` se exporta como función del módulo CommonJS.
2. Cada prueba usa `test(descripcion, fn)` y verifica con `expect(actual).toBe(expected)`.
3. El descubrimiento de pruebas es automático: `npm test` ejecuta todos los archivos `test/**/*.test.js`.
4. `multiplication`, `division` y `modulus` se implementan con las estrategias educativas de la especificación (sin usar los operadores `*`, `/` ni `%` respectivamente).

**EN:** This project uses **npm** + **Jest**, the most widespread testing framework in the JavaScript ecosystem:

1. Each `calculator` operation is exported as a CommonJS module function.
2. Each test uses `test(description, fn)` and verifies with `expect(actual).toBe(expected)`.
3. Test discovery is automatic: `npm test` runs all `test/**/*.test.js` files.
4. `multiplication`, `division` and `modulus` are implemented with the educational strategies from the specification (without using the `*`, `/` or `%` operators respectively).

---

## 📄 Archivos de configuración clave / Key Configuration Files

### `package.json` — Manifiesto npm

**ES:** Declara el script `test` (que invoca a Jest) y la única dependencia externa: `jest` (de desarrollo). El resto del proyecto usa únicamente la biblioteca estándar de Node.js.

**EN:** Declares the `test` script (which invokes Jest) and the single external dependency: `jest` (dev). The rest of the project uses only Node.js's standard library.

### `src/calculator.js` — Módulo principal

| Operación | Implementación educativa |
| --------- | ------------------------ |
| `addition(a, b)` | Suma directa (`a + b`). |
| `subtraction(a, b)` | Resta directa (`a - b`). |
| `multiplication(a, b)` | Suma repetitiva: acumula `a`, `b` veces (no usa `*`). |
| `division(a, b)` | Resta repetitiva: resta `b` de `a` mientras `a >= b` (no usa `/`). |
| `modulus(a, b)` | Construida sobre `division` y `multiplication` (no usa `%`). |

```javascript
const addition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const multiplication = (a, b) => {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result = addition(result, a);
    }
    return result;
};

const division = (a, b) => {
    let count = 0;
    while (a >= b) {
        a = subtraction(a, b);
        count++;
    }
    return count;
};

const modulus = (a, b) => {
    const q = division(a, b);
    const p = multiplication(q, b);
    return subtraction(a, p);
};

module.exports = { addition, subtraction, multiplication, division, modulus };
```

### `test/calculator.test.js` — Pruebas unitarias (Jest)

**ES:** Un `test` por operación, con los mismos casos del pseudocódigo de la especificación.

**EN:** One `test` per operation, with the same cases as the specification pseudocode.

```javascript
const { addition, subtraction, multiplication, division, modulus } = require("../src/calculator");

test("addition(2, 3) should equal 5", () => {
    expect(addition(2, 3)).toBe(5);
});

test("subtraction(5, 2) should equal 3", () => {
    expect(subtraction(5, 2)).toBe(3);
});

test("multiplication(3, 4) should equal 12", () => {
    expect(multiplication(3, 4)).toBe(12);
});

test("division(10, 3) should equal 3", () => {
    expect(division(10, 3)).toBe(3);
});

test("modulus(10, 3) should equal 1", () => {
    expect(modulus(10, 3)).toBe(1);
});
```

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- **Node.js 18+** (`node`).
- **npm** (`npm`).

```bash
node --version
npm --version
```

### Instalar dependencias / Install dependencies

```bash
cd javascript/core/foundations/unit_test/calculator
npm install
```

### Ejecutar las pruebas unitarias / Run tests

```bash
npm test
```

### Salida esperada / Expected output

```text
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
```

---

## 📝 Notas de implementación / Implementation Notes

**ES:** El proyecto no define un punto de entrada manual: el "runner" es Jest a través de `npm test`, que descubre y ejecuta la suite automáticamente según `jest.config.js`.

**EN:** The project defines no manual entry point: the "runner" is Jest through `npm test`, which discovers and executes the suite automatically per `jest.config.js`.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
