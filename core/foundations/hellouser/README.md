# Hello, User! — JavaScript

Implementación de la especificación [02_Hello_User](https://yorche3.github.io/programming_languages/core/foundations/02_Hello_User/) en **JavaScript**, ejecutada con **Node.js**, con un enfoque manual y minimalista.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo | Propósito |
| ------- | --------- |
| [`HelloUser.js`](HelloUser.js) | Código fuente: solicita el nombre del usuario, lo guarda en `name` y saluda. |

**Estructura de directorios esperada:**

```text
hellouser/
├── HelloUser.js   # Código fuente
└── README.md      # Este archivo
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El proyecto se creó manualmente, sin herramientas de scaffolding ni gestores de paquetes (npm). La entrada por consola se maneja con el módulo **`readline`** de la biblioteca estándar de Node.js, sin dependencias externas.

**EN:** The project was created manually, without scaffolding tools or package managers (npm). Console input is handled with Node.js's standard library **`readline`** module, with no external dependencies.

### Inicialización / Initialization

1. Crear la estructura de directorios:

   ```bash
   mkdir -p javascript/core/foundations/hellouser
   ```

2. Escribir el archivo `HelloUser.js` con el código fuente.

3. No se necesita ningún paso adicional de construcción o vinculación de dependencias.

---

## 📄 Archivos de configuración clave / Key Configuration Files

No se requieren archivos de configuración. El programa se ejecuta directamente con el runtime de Node.js, sin `package.json` ni dependencias externas.

```javascript
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    console.log("Hello, " + name + "!");
    rl.close();
});
```

| Elemento | Propósito |
| -------- | --------- |
| `readline.createInterface({...})` | Crea una interfaz de lectura/escritura sobre la entrada y salida estándar. |
| `rl.question(...)` | Imprime el mensaje de solicitud y entrega la línea ingresada al callback. |
| `name` | Variable que almacena la respuesta del usuario. |
| `console.log(...)` | Imprime el saludo con salto de línea al final. |
| `rl.close()` | Cierra la interfaz y termina el programa. |

---

## 🚀 Compilación y ejecución / Build & Run

### Ejecutar / Run

```bash
cd javascript/core/foundations/hellouser
node HelloUser.js
```

### Salida esperada / Expected output

```text
What is your name? John
Hello, John!
```

> **ES:** Reemplaza `John` por cualquier nombre que ingrese el usuario.
> **EN:** Replace `John` with whatever name the user enters.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
