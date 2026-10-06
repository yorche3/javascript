# Data Structures Basics — JavaScript

Implementación de la especificación [06_Data_Structures_Basics](https://yorche3.github.io/programming_languages/core/algorithms/06_Data_Structures_Basics/) en **JavaScript**, usando **npm** y **Jest**.

**ES:** Cuatro estructuras construidas a mano sobre un único tipo `Node`: `Node`, `LinkedList`, `Stack` y `Queue`. Cada ADT gestiona sus propios punteros y contador; `Stack` y `Queue` no delegan en `LinkedList`.

**EN:** Four structures built by hand over a single `Node` type: `Node`, `LinkedList`, `Stack` and `Queue`. Each ADT manages its own pointers and count; `Stack` and `Queue` do not delegate to `LinkedList`.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo / File | Propósito / Purpose |
|---|---|
| [`package.json`](package.json) | Manifiesto npm — script `test` y dependencia de desarrollo `jest`. / npm manifest — `test` script and `jest` dev dependency. |
| [`jest.config.js`](jest.config.js) | Configuración de Jest — `testEnvironment: "node"` y búsqueda en `test/**/*.test.js`. / Jest config — `testEnvironment: "node"` and `test/**/*.test.js` match. |
| [`index.js`](index.js) | Barril del módulo — re-exporta `Node`, `LinkedList`, `Stack` y `Queue`. / Module barrel — re-exports `Node`, `LinkedList`, `Stack` and `Queue`. |
| [`src/Node.js`](src/Node.js) | Celda enlazada compartida — `value` y `next`. / Shared linked cell — `value` and `next`. |
| [`src/LinkedList.js`](src/LinkedList.js) | Lista enlazada con `head`, `tail` y `count`. / Linked list with `head`, `tail` and `count`. |
| [`src/Stack.js`](src/Stack.js) | Pila LIFO con `top` y `count`. / LIFO stack with `top` and `count`. |
| [`src/Queue.js`](src/Queue.js) | Cola FIFO con `front`, `rear` y `count`. / FIFO queue with `front`, `rear` and `count`. |
| [`test/data_structures_basics.test.js`](test/data_structures_basics.test.js) | Suite de pruebas — 4 tests (uno por ADT) con casos sucesivos sobre la misma instancia. / Test suite — 4 tests (one per ADT) with successive cases on the same instance. |
| [`.gitignore`](.gitignore) | Ignora `node_modules/`. / Ignores `node_modules/`. |

**Estructura de directorios / Directory structure:**

```text
data_structures_basics/
├── package.json
├── jest.config.js
├── index.js
├── .gitignore
├── src/
│   ├── Node.js
│   ├── LinkedList.js
│   ├── Stack.js
│   └── Queue.js
├── test/
│   └── data_structures_basics.test.js
└── node_modules/                    # Generado por npm install (no versionado)
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** Proyecto npm + Jest con layout `src/` + `test/`. Cada ADT es una clase ES2022 con campos privados (`#field`) y getters/setters. El constructor actúa como `init` del contrato: `new Node(value)` fija el valor y deja `next` en `null`; `new LinkedList()`, `new Stack()` y `new Queue()` fijan sus enlaces ausentes y contador a cero.

**EN:** npm + Jest project with `src/` + `test/` layout. Each ADT is an ES2022 class with private fields (`#field`) and getters/setters. The constructor acts as the contract's `init`: `new Node(value)` sets the value and leaves `next` as `null`; `new LinkedList()`, `new Stack()` and `new Queue()` set their absent links and count to zero.

---

## 📄 Configuración clave / Key Configuration

**ES:** `package.json` declara `"type": "module"` (ESM nativo) y el script `test` arranca Jest con `--experimental-vm-modules` para soportar ESM. `jest.config.js` fija `testEnvironment: "node"` y busca tests en `test/**/*.test.js`.

**EN:** `package.json` declares `"type": "module"` (native ESM) and the `test` script starts Jest with `--experimental-vm-modules` for ESM support. `jest.config.js` sets `testEnvironment: "node"` and looks for tests in `test/**/*.test.js`.

---

## 🚀 Compilación y ejecución / Build & Run

```bash
npm test
```

**Salida real / Actual output:**

```text
> data_structures_basics@1.0.0 test
> node --experimental-vm-modules ./node_modules/jest/bin/jest.js

(node:196773) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show the full trace)

PASS test/data_structures_basics.test.js
  ✓ Node (2 ms)
  ✓ LinkedList (1 ms)
  ✓ Stack
  ✓ Queue (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.148 s, estimated 1 s
Ran all test suites.
```

---

## 🧠 Algoritmos y operaciones / Algorithms & Operations

### `Node`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Node(value)` | `number → Node` | `O(1)` | Constructor; fija `value` y `next = null`. / Constructor; sets `value` and `next = null`. |
| `node.value` | `→ number` | `O(1)` | Getter (get_value). |
| `node.next` | `→ Node \| null` | `O(1)` | Getter (get_next); `null` cuando está ausente. / Getter (get_next); `null` when absent. |
| `node.next = other` | `Node \| null → void` | `O(1)` | Setter (set_next). |

### `LinkedList`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new LinkedList()` | `→ LinkedList` | `O(1)` | Constructor; cabeza/cola `null`, tamaño `0`. / Constructor; head/tail `null`, size `0`. |
| `list.headValue` | `→ number` | `O(1)` | Getter (get_head); `-1` si está vacía. / Getter (get_head); `-1` if empty. |
| `list.isEmpty` | `→ boolean` | `O(1)` | Getter (is_empty). |
| `list.size` | `→ number` | `O(1)` | Getter (size). |
| `list.insertHead(value)` | `number → void` | `O(1)` | Inserta al principio. / Inserts at the beginning. |
| `list.insertTail(value)` | `number → void` | `O(1)` | Inserta al final. / Inserts at the end. |
| `list.delete(value)` | `number → boolean` | `O(n)` | Elimina la primera aparición; `false` si no está. / Deletes first occurrence; `false` if absent. |

### `Stack`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Stack()` | `→ Stack` | `O(1)` | Constructor; tope `null`, tamaño `0`. / Constructor; top `null`, size `0`. |
| `stack.topValue` | `→ number` | `O(1)` | Getter (peek); `-1` si está vacía. / Getter (peek); `-1` if empty. |
| `stack.isEmpty` | `→ boolean` | `O(1)` | Getter (is_empty). |
| `stack.size` | `→ number` | `O(1)` | Getter (size). |
| `stack.push(value)` | `number → void` | `O(1)` | Apila el valor. / Pushes the value. |
| `stack.pop()` | `→ number` | `O(1)` | Extrae el tope; `-1` si está vacía. / Pops the top; `-1` if empty. |

### `Queue`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Queue()` | `→ Queue` | `O(1)` | Constructor; frente/final `null`, tamaño `0`. / Constructor; front/rear `null`, size `0`. |
| `queue.frontValue` | `→ number` | `O(1)` | Getter (peek); `-1` si está vacía. / Getter (peek); `-1` if empty. |
| `queue.isEmpty` | `→ boolean` | `O(1)` | Getter (is_empty). |
| `queue.size` | `→ number` | `O(1)` | Getter (size). |
| `queue.enqueue(value)` | `number → void` | `O(1)` | Añade por el final. / Adds at the rear. |
| `queue.dequeue()` | `→ number` | `O(1)` | Extrae el frente; `-1` si está vacía. / Dequeues the front; `-1` if empty. |

---

## 🧩 Decisiones de diseño / Design decisions

| Decisión / Decision | Alternativa considerada / Alternative | Razón / Reason |
|---|---|---|
| Clases ES2022 con campos privados (`#field`) | Objetos literales o funciones cerradas | Los campos privados ofrecen encapsulación nativa sin overhead de closures; los getters/setters declaran el contrato públicamente. / ES2022 private fields offer native encapsulation without closure overhead; getters/setters declare the public contract. |
| Constructor como `init` | Método `init()` separado | El constructor de JavaScript ya inicializa el estado; un método `init()` adicional sería redundante y rompería el patrón idiomático. / JavaScript's constructor already initializes state; an additional `init()` method would be redundant and break the idiomatic pattern. |
| Getters para `isEmpty`, `size`, `headValue`, `topValue`, `frontValue` | Métodos `isEmpty()`, `size()`, etc. | Los getters tratan estas consultas como propiedades (sin efectos secundarios), lo que es idiomático en JavaScript para operaciones de solo lectura. / Getters treat these queries as properties (no side effects), which is idiomatic in JavaScript for read-only operations. |
| Un único archivo por ADT | Todo en un solo archivo | Separar por ADT mejora la legibilidad y permite importar solo lo necesario; el barril `index.js` re-exporta todo. / Separating by ADT improves readability and allows importing only what is needed; the `index.js` barrel re-exports everything. |

---

## 🔀 Adaptaciones idiomáticas / Idiomatic adaptations

| Especificación / Specification | Adaptación / Adaptation | Justificación / Justification |
|---|---|---|
| `init(value)`, `init()` como métodos | Constructor `new Node(value)`, `new LinkedList()`, etc. | JavaScript usa constructores para inicialización; un método `init()` separado no es idiomático y añadiría un paso innecesario. / JavaScript uses constructors for initialization; a separate `init()` method is not idiomatic and would add an unnecessary step. |
| `get_value()`, `get_next()`, `is_empty()`, `size()`, `get_head()`, `peek()` como métodos | Getters: `node.value`, `node.next`, `list.isEmpty`, `list.size`, `list.headValue`, `stack.topValue`, `queue.frontValue` | Las consultas sin efectos secundarios se expresan como getters en JavaScript idiomático; el contrato observable se mantiene. / Side-effect-free queries are expressed as getters in idiomatic JavaScript; the observable contract is preserved. |
| `set_next(next)` como método | Setter: `node.next = other` | El setter es la forma idiomática de actualizar una propiedad; el contrato se conserva. / The setter is the idiomatic way to update a property; the contract is preserved. |
| `insert_head`, `insert_tail`, `delete`, `push`, `pop`, `enqueue`, `dequeue` como funciones | Métodos: `insertHead`, `insertTail`, `delete`, `push`, `pop`, `enqueue`, `dequeue` | JavaScript usa camelCase para métodos; la semántica y complejidad se conservan. / JavaScript uses camelCase for methods; semantics and complexity are preserved. |
| Ubicación esperada: `src/data_structures_basics.ext` | Layout real: `src/Node.js`, `src/LinkedList.js`, `src/Stack.js`, `src/Queue.js` + `index.js` | La especificación sugiere un solo archivo, pero JavaScript idiomático separa módulos por responsabilidad; el barril `index.js` re-exporta los cuatro ADTs. / The spec suggests a single file, but idiomatic JavaScript separates modules by responsibility; the `index.js` barrel re-exports the four ADTs. |
| Ubicación esperada: `test/run_tests.ext` | Layout real: `test/data_structures_basics.test.js` ejecutado con `npm test` | Jest es el framework de pruebas estándar en JavaScript; no hay un script `run_tests` separado. / Jest is the standard test framework in JavaScript; there is no separate `run_tests` script. |

---

## 🚨 Indicadores de fallo / Failure indicators

| Operación / Operation | Situación de fallo / Failure situation | Indicador / Indicator | Ejemplo / Example |
|---|---|---|---|
| `list.headValue` | Lista vacía | `-1` | `new LinkedList().headValue` → `-1` |
| `list.delete(value)` | Valor no está en la lista | `false` | `list.delete(99)` → `false` |
| `stack.topValue` | Pila vacía | `-1` | `new Stack().topValue` → `-1` |
| `stack.pop()` | Pila vacía | `-1` | `new Stack().pop()` → `-1` |
| `queue.frontValue` | Cola vacía | `-1` | `new Queue().frontValue` → `-1` |
| `queue.dequeue()` | Cola vacía | `-1` | `new Queue().dequeue()` → `-1` |
| `node.next` | Enlace ausente | `null` | `new Node(10).next` → `null` |

---

## ✅ Cobertura de pruebas / Test coverage

### `Node`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test |
|---|---|:--:|
| Inicializar y observar valor/enlace | Sí | `test/data_structures_basics.test.js:42-50` |
| Inicializar otro nodo, enlazar y recorrer | Sí | `test/data_structures_basics.test.js:51-60` |

### `LinkedList`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test |
|---|---|:--:|
| Estado vacío | Sí | `test/data_structures_basics.test.js:68-75` |
| Insertar por ambos extremos | Sí | `test/data_structures_basics.test.js:76-85` |
| Eliminar primera aparición | Sí | `test/data_structures_basics.test.js:86-93` |
| Valor ausente | Sí | `test/data_structures_basics.test.js:94-100` |
| Vaciar la lista | Sí | `test/data_structures_basics.test.js:101-112` |

### `Stack`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test |
|---|---|:--:|
| Estado vacío y extracción fallida | Sí | `test/data_structures_basics.test.js:119-127` |
| LIFO y peek no mutante | Sí | `test/data_structures_basics.test.js:128-136` |
| Extracción y reutilización | Sí | `test/data_structures_basics.test.js:137-148` |
| Vacío tras extracción | Sí | `test/data_structures_basics.test.js:149-154` |

### `Queue`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test |
|---|---|:--:|
| Estado vacío y extracción fallida | Sí | `test/data_structures_basics.test.js:161-169` |
| FIFO y peek no mutante | Sí | `test/data_structures_basics.test.js:170-178` |
| Extracción y reutilización | Sí | `test/data_structures_basics.test.js:179-190` |
| Vacío tras extracción | Sí | `test/data_structures_basics.test.js:191-196` |

---

## ⚠️ Limitaciones conocidas / Known limitations

Ninguna / None

**ES:** JavaScript no impone límites de capacidad en estructuras enlazadas (salvo memoria disponible); todas las operaciones preservan las cotas de complejidad declaradas en la especificación.

**EN:** JavaScript imposes no capacity limits on linked structures (except available memory); all operations preserve the complexity bounds declared in the specification.

---

## 📝 Notas de implementación / Implementation Notes

**ES:**

- **Campos privados:** Las clases usan `#field` (ES2022) para encapsulación nativa. Los getters/setters declaran la API pública.
- **Constructores como `init`:** El constructor inicializa el estado; no hay un método `init()` separado.
- **Getters para consultas:** `isEmpty`, `size`, `headValue`, `topValue`, `frontValue` son getters, no métodos, porque son consultas sin efectos secundarios.
- **Mutabilidad:** JavaScript es mutable por defecto; las operaciones `insertHead`, `insertTail`, `delete`, `push`, `pop`, `enqueue`, `dequeue` mutan la instancia en lugar de devolver una nueva.
- **Indicadores de fallo:** `-1` para valores numéricos ausentes, `false` para `delete` cuando el valor no está, `null` para enlaces ausentes.
- **Suite de pruebas:** Un test por ADT con casos sucesivos sobre la misma instancia, como exige la especificación.

**EN:**

- **Private fields:** Classes use `#field` (ES2022) for native encapsulation. Getters/setters declare the public API.
- **Constructors as `init`:** The constructor initializes state; there is no separate `init()` method.
- **Getters for queries:** `isEmpty`, `size`, `headValue`, `topValue`, `frontValue` are getters, not methods, because they are side-effect-free queries.
- **Mutability:** JavaScript is mutable by default; operations `insertHead`, `insertTail`, `delete`, `push`, `pop`, `enqueue`, `dequeue` mutate the instance rather than returning a new one.
- **Failure indicators:** `-1` for absent numeric values, `false` for `delete` when the value is absent, `null` for absent links.
- **Test suite:** One test per ADT with successive cases on the same instance, as the specification requires.

**ES:** Este proyecto también está implementado en otros lenguajes. Explora el repositorio principal para consultar las demás versiones.

**EN:** This project is also implemented in other languages. Explore the main repository to see the other versions.

---

## 🔍 Checklist de validación / Validation checklist

- [x] La suite nativa se ejecutó y su salida real está copiada en este README.
- [x] Cada caso de la especificación tiene su fila en _Cobertura de pruebas_.
- [x] Cada desviación del pseudocódigo o de la ubicación esperada está en _Adaptaciones idiomáticas_.
- [x] Cada operación con fallo posible está en _Indicadores de fallo_.
- [x] No hay rutas absolutas del autor, credenciales ni salidas inventadas.
- [x] Los enlaces relativos resuelven dentro del repositorio y el documento es bilingüe.
- [x] Ninguna sección repite lo que ya dice la especificación.

---

## 📚 Referencias / References

| Tipo / Kind | Referencia / Reference |
|---|---|
| Especificación / Specification | [`06_Data_Structures_Basics.md`](https://yorche3.github.io/programming_languages/core/algorithms/06_Data_Structures_Basics/) |
| Módulo homologado del lenguaje / Homologated module | [`javascript/core/foundations/numbers/`](../foundations/numbers/) |
| Guía de inicialización / Initialisation guide | [`core/00_Project_Initialization_Guide.md`](https://yorche3.github.io/programming_languages/core/00_Project_Initialization_Guide/) |
| Adaptaciones idiomáticas / Idiomatic adaptations | [`AGENT_Template.md`](https://yorche3.github.io/programming_languages/docs/AGENT_Template/) |
| Validación de la documentación / Documentation validation | [`WORKFLOW.md`](https://yorche3.github.io/programming_languages/docs/WORKFLOW/) |
| Documentación oficial del lenguaje / Language official docs | [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |

---

*[← Volver a 05_Naive_Sort](../05_Naive_Sort/) | [↑ Volver a inicio / Back to home](https://yorche3.github.io/programming_languages/)*
