# JavaScript

Proyectos en **JavaScript**, ejecutados con **Node.js**, con gestión de dependencias mediante **npm** y el framework de pruebas **Jest**.

---

## 📂 Módulos / Modules

| Módulo | Descripción |
| ------ | ----------- |
| [`core/foundations/`](core/foundations/) | **Fase 0 — Fundamentos**: `helloworld`, `hellouser`, `unit_test/calculator`, `numbers` |

---

## ▶️ Comenzar / Getting Started

```bash
# Hello, World!
cd core/foundations/helloworld
node HelloWorld.js

# Hello, User!
cd core/foundations/hellouser
node HelloUser.js

# Calculator Tests
cd core/foundations/unit_test/calculator
npm install
npm test

# Numbers Tests
cd core/foundations/numbers
npm install
npm test
```

---

## 📦 Requisitos / Requirements

| Herramienta | Instalación |
| ----------- | ----------- |
| [Node.js 18+](https://nodejs.org/) | `sudo apt install nodejs` (Linux) / `winget install OpenJS.NodeJS.LTS` (Windows) / [Descargar](https://nodejs.org/) |
| [npm](https://www.npmjs.com/) | Se incluye con Node.js |

```bash
# Verificar instalación
node --version
npm --version
```

---

## 🏗️ Tipos de proyecto / Project Types

### 1. Programa simple (sin dependencias)

**ES:** Un único archivo fuente, sin dependencias externas ni `package.json`, ejecutable directamente con `node`. Ideal para `helloworld` y `hellouser`.

**EN:** A single source file, no external dependencies and no `package.json`, executable directly with `node`. Ideal for `helloworld` and `hellouser`.

```bash
node <file>.js
```

### 2. Proyecto con pruebas unitarias (npm + Jest)

**ES:** Para proyectos que requieren pruebas unitarias, se inicializa un paquete con `npm install` y se usa **Jest** como dependencia de desarrollo. El código fuente se organiza en `src/` y las pruebas en `test/`, con descubrimiento automático de tests mediante `*.test.js`.

**EN:** For projects that require unit tests, a package is initialized with `npm install` and **Jest** is used as a dev dependency. Source code goes in `src/` and tests in `test/`, with automatic test discovery via `*.test.js`.

```bash
npm install
npm test
```

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
