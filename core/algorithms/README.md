# Algorithms Pure — JavaScript

Implementaciones de la [Fase 1 — Algoritmos Puros](https://yorche3.github.io/programming_languages/ROADMAP/#fase-1--algoritmos-puros--algorithms-pure-) en **JavaScript** sobre **Node.js**: ordenamientos elementales, estructuras de datos propias, ordenamientos óptimos y distribuidos, y búsqueda.

Los módulos de esta fase trabajan sobre `number[]`, que en JavaScript **es mutable**, **admite `null`** y se ordena *in-place*.

---

## 📂 Módulos / Modules

| Módulo | Especificación | Enfoque | Tests | Estado |
|--------|---------------|---------|:-----:|:------:|
| [`naive_sort/`](naive_sort/) | [05_Naive_Sort](https://yorche3.github.io/programming_languages/core/algorithms/05_Naive_Sort/) | `npm test` + Jest | 3 | ✅ |

---

## 📁 Estructura / Structure

```text
algorithms/
└── naive_sort/                      # 05_Naive_Sort
    ├── package.json
    ├── package-lock.json
    ├── jest.config.js
    ├── .gitignore                   # node_modules/
    ├── src/
    │   └── naive_sort.js            # selectionSort, bubbleSort, insertionSort
    ├── test/
    │   └── naive_sort.test.js       # 3 tests × (7 casos + caso nulo)
    └── README.md
```

---

## 🛠️ Patrón común / Common Pattern

| Característica | Descripción |
|---------------|-------------|
| **Runtime** | Node.js (v22 en este entorno) |
| **CLI** | `npm install`, `npm test` |
| **Manifiesto** | `package.json` — `main`, script `test` y `devDependencies` |
| **Lock** | `package-lock.json` — se versiona, para instalaciones reproducibles |
| **Framework de tests** | Jest (`jest ^30.0.5`), declarado en `devDependencies` |
| **Descubrimiento** | `jest.config.js` → `testMatch: ["**/test/**/*.test.js"]` |
| **Entry point** | No aplica: la biblioteca se carga con `require("../src/{modulo}")` |
| **Separación** | `src/` (módulo) ↔ `test/` (suites `*.test.js`) |
| **Iteración** | Bucles `for`/`while` explícitos sobre `number[]` |
| **Visibilidad** | `module.exports` con las funciones del contrato; los helpers no se exportan |
| **Naming** | `camelCase` (`selectionSort`), archivos en `snake_case` con sufijo `.test.js` |
| **Indicador de fallo** | `null` — se devuelve tal cual, sin lanzar excepciones |
| **Artefactos** | `node_modules/` — ignorado en `.gitignore` |

---

## 🚀 Compilación rápida / Quick Build

```bash
# Naive Sort Tests
cd naive_sort
npm install
npm test
```

---

### 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

## ▶️ Siguiente / Next

👉 Continúa con los módulos pendientes de esta fase en el [Roadmap](https://yorche3.github.io/programming_languages/ROADMAP/).
👉 Continue with the pending modules of this phase in the [Roadmap](https://yorche3.github.io/programming_languages/ROADMAP/).

---

*[← Volver a Core](../README.md)*

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
