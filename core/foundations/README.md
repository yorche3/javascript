# 🚀 Fundamentos / Foundations — JavaScript

Implementación de los ejercicios de la sección [Fundamentos / Foundations](https://yorche3.github.io/programming_languages/core/foundations/) del repositorio principal en **JavaScript**, ejecutados con **Node.js**.

---

## 📖 Descripción / Description

**ES:** Esta sección reúne los conceptos esenciales para empezar a trabajar con **JavaScript**. Cubre desde los programas más básicos (`Hello, World!` y `Hello, User!`) hasta la implementación de una calculadora con pruebas unitarias y algoritmos numéricos en tres enfoques progresivos (recursivo directo, recursivo con acumulador e iterativo).

**EN:** This section brings together the essential concepts to start working with **JavaScript**. It covers everything from the most basic programs (`Hello, World!` and `Hello, User!`) to the implementation of a calculator with unit tests and numerical algorithms in three progressive approaches (direct recursion, accumulator recursion, and iterative).

---

## 📁 Estructura / Structure

```text
javascript/
└── core/
    └── foundations/
        ├── README.md              # Este archivo / This file
        ├── helloworld/            # 01_Hello_World — Primer programa
        │   ├── HelloWorld.js
        │   └── README.md
        ├── hellouser/             # 02_Hello_User — Entrada y salida
        │   ├── HelloUser.js
        │   └── README.md
        ├── unit_test/
        │   └── calculator/        # 03_Unit_Test_Calculator — Pruebas unitarias
        │       ├── package.json
        │       ├── jest.config.js
        │       ├── src/
        │       │   └── calculator.js
        │       ├── test/
        │       │   └── calculator.test.js
        │       └── README.md
        └── numbers/               # 04_Numbers — Algoritmos numéricos
            ├── package.json
            ├── jest.config.js
            ├── src/
            │   └── numbers.js
            ├── test/
            │   ├── numbers.rec.test.js
            │   └── numbers.ite.test.js
            └── README.md
```

---

## 🔢 Progresión / Progression

| Especificación | Proyecto | Conceptos | Dependencias externas |
| -------------- | -------- | --------- | :-------------------: |
| [`01_Hello_World`](https://yorche3.github.io/programming_languages/core/foundations/01_Hello_World/) | [`helloworld/`](helloworld/) | `console.log`, ejecución con `node` | ❌ Solo stdlib |
| [`02_Hello_User`](https://yorche3.github.io/programming_languages/core/foundations/02_Hello_User/) | [`hellouser/`](hellouser/) | Variables, módulo `readline`, callbacks | ❌ Solo stdlib |
| [`03_Unit_Test_Calculator`](https://yorche3.github.io/programming_languages/core/foundations/03_Unit_Test_Calculator/) | [`unit_test/calculator/`](unit_test/calculator/) | npm, Jest, `test(...)`, `expect(...).toBe(...)` | ✅ Jest |
| [`04_Numbers`](https://yorche3.github.io/programming_languages/core/foundations/04_Numbers/) | [`numbers/`](numbers/) | Recursión, iteración, acumuladores, helpers privados, TCO | ✅ Jest |

---

## 🛠️ Enfoque general / General Approach

**ES:** Los proyectos en esta sección siguen un patrón progresivo:

1. **Hello World** y **Hello User**: Programas de un solo archivo ejecutados directamente con `node`, sin `package.json`. Usan exclusivamente la biblioteca estándar de Node.js (`console.log`, `readline`).
2. **Calculator**: Primer proyecto con dependencia externa (**Jest**). Introduce **npm** (`package.json`, `package-lock.json`), separación `src/` + `test/` y el ecosistema `npm test`.
3. **Numbers**: Expande el patrón de Calculator a múltiples archivos de prueba (uno por enfoque probado). La versión con acumulador (`_acc`) se conserva en el fuente como puente didáctico: V8 no garantiza TCO, por lo que solo se prueban los enfoques recursivo e iterativo (22 casos).

**EN:** The projects in this section follow a progressive pattern:

1. **Hello World** and **Hello User**: Single-file programs run directly with `node`, without `package.json`. Use only Node.js's standard library (`console.log`, `readline`).
2. **Calculator**: First project with an external dependency (**Jest**). Introduces **npm** (`package.json`, `package-lock.json`), `src/` + `test/` separation, and the `npm test` ecosystem.
3. **Numbers**: Expands the Calculator pattern to multiple test files (one per tested approach). The accumulator version (`_acc`) is kept in source as an educational bridge: V8 does not guarantee TCO, so only the recursive and iterative approaches are tested (22 cases).

---

## 🚀 Ejecución rápida / Quick Start

### Hello World

```bash
cd javascript/core/foundations/helloworld
node HelloWorld.js
```

### Hello User

```bash
cd javascript/core/foundations/hellouser
node HelloUser.js
```

### Calculator (pruebas)

```bash
cd javascript/core/foundations/unit_test/calculator
npm install
npm test
```

### Numbers (pruebas)

```bash
cd javascript/core/foundations/numbers
npm install
npm test
```

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
