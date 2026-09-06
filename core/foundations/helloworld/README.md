# Hello, World! — JavaScript

Implementación de la especificación [01_Hello_World](https://yorche3.github.io/programming_languages/core/foundations/01_Hello_World/) en **JavaScript**, ejecutada con **Node.js**, con un enfoque manual y minimalista.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo | Propósito |
| ------- | --------- |
| [`HelloWorld.js`](HelloWorld.js) | Código fuente: imprime `"Hello, World! from JavaScript!"` en la consola. |

**Estructura de directorios esperada:**

```text
helloworld/
├── HelloWorld.js   # Código fuente
└── README.md       # Este archivo
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El proyecto se creó manualmente, sin herramientas de scaffolding ni gestores de paquetes (npm), para mantener la máxima sencillez. Un único archivo `.js` con una llamada a `console.log` es suficiente.

**EN:** The project was created manually, without scaffolding tools or package managers (npm), to keep it as simple as possible. A single `.js` file with one `console.log` call is enough.

### Inicialización / Initialization

1. Crear la estructura de directorios:

   ```bash
   mkdir -p javascript/core/foundations/helloworld
   ```

2. Escribir el archivo `HelloWorld.js` con el código fuente.

3. No se necesita ningún paso adicional de construcción o vinculación de dependencias.

---

## 📄 Archivos de configuración clave / Key Configuration Files

No se requieren archivos de configuración. El programa se ejecuta directamente con el runtime de Node.js, sin `package.json` ni dependencias externas.

```javascript
console.log("Hello, World! from JavaScript!");
```

| Elemento | Propósito |
| -------- | --------- |
| `console.log(...)` | Imprime una línea con salto de línea al final en la salida estándar. |

---

## 🚀 Compilación y ejecución / Build & Run

### Ejecutar / Run

```bash
cd javascript/core/foundations/helloworld
node HelloWorld.js
```

### Salida esperada / Expected output

```text
Hello, World! from JavaScript!
```

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
