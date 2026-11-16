# Data Structures Advanced — JavaScript

Implementación de la especificación [07_Data_Structures_Advanced](https://yorche3.github.io/programming_languages/core/algorithms/07_Data_Structures_Advanced/) en **JavaScript**, usando **npm** y **Jest**.

**ES:** Estructuras con múltiples enlaces por nodo construidas a mano sobre una base `Node`: `TreeNode` (enlaces izquierdo y derecho), `BinaryTree` (árbol binario de búsqueda sin límite de capacidad contractual), `GraphNode` (nodo de grafo con adyacencia y enlace al registro canónico) y `Graph` (grafo dirigido con registro enlazado propio y adyacencia ordenada).

**EN:** Structures with multiple links per node built by hand over a `Node` base: `TreeNode` (left and right links), `BinaryTree` (binary search tree without contractual capacity limits), `GraphNode` (graph node with adjacency and link to canonical registry), and `Graph` (directed graph with manual linked registry and sorted adjacency).

---

## 📂 Archivos y estructura / Files & Structure

| Archivo / File | Propósito / Purpose |
|---|---|
| [`package.json`](package.json) | Manifiesto npm — script `test` y dependencia de desarrollo `jest`. / npm manifest — `test` script and `jest` dev dependency. |
| [`jest.config.js`](jest.config.js) | Configuración de Jest — `testEnvironment: "node"` y búsqueda en `test/**/*.test.js`. / Jest config — `testEnvironment: "node"` and `test/**/*.test.js` match. |
| [`index.js`](index.js) | Barril del módulo — re-exporta `Node`, `TreeNode`, `BinaryTree` y `Graph`. / Module barrel — re-exports `Node`, `TreeNode`, `BinaryTree`, and `Graph`. |
| [`src/Node.js`](src/Node.js) | Clase base `Node` — almacena únicamente `value` con `#value` privado sin validaciones ni enlaces. / Base class `Node` — stores `value` only with private `#value`, without validations or links. |
| [`src/TreeNode.js`](src/TreeNode.js) | Nodo derivado de `Node` para el ABB — añade `#left` y `#right` privados con getters y setters. / Derived node from `Node` for the BST — adds private `#left` and `#right` with getters and setters. |
| [`src/BinaryTree.js`](src/BinaryTree.js) | Árbol binario de búsqueda (ABB) — `insert`, `contains`, `isEmpty` y `size`. / Binary search tree (BST) — `insert`, `contains`, `isEmpty`, and `size`. |
| [`src/Graph.js`](src/Graph.js) | Grafo dirigido — contiene la clase interna `GraphNode` (hereda de `Node`) y el ADT `Graph` con registro enlazado de vértices y adyacencias dirigidas. / Directed graph — contains internal class `GraphNode` (inherits from `Node`) and ADT `Graph` with linked vertex registry and directed adjacencies. |
| [`test/data_structures_advanced.test.js`](test/data_structures_advanced.test.js) | Suite de pruebas Jest — 23 tests organizados en 3 bloques `describe` (`TreeNode`, `BinaryTree`, `Graph`). / Jest test suite — 23 tests organized into 3 `describe` blocks (`TreeNode`, `BinaryTree`, `Graph`). |
| [`.gitignore`](.gitignore) | Ignora `node_modules/`. / Ignores `node_modules/`. |

**Estructura de directorios / Directory structure:**

```text
data_structures_advanced/
├── package.json
├── jest.config.js
├── index.js
├── .gitignore
├── src/
│   ├── Node.js
│   ├── TreeNode.js
│   ├── BinaryTree.js
│   └── Graph.js
├── test/
│   └── data_structures_advanced.test.js
└── node_modules/                    # Generado por npm install (no versionado)
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** Proyecto npm + Jest con layout modular `src/` + `test/`. Cada tipo es una clase ES2022 con campos privados (`#field`), getters y setters idiomáticos. La reutilización del valor de la base `Node` se realiza por herencia real (`extends Node` y `super(value)` / `super(label)`). El registro canónico de vértices de `Graph` es una lista simplemente enlazada manual a través del puntero `nextVertex`, garantizando búsqueda manual `O(V)` sin delegar en diccionarios ni tablas hash.

**EN:** npm + Jest project with modular `src/` + `test/` layout. Each type is an ES2022 class using private fields (`#field`), idiomatic getters, and setters. Reusing the value from the `Node` base is implemented via real inheritance (`extends Node` and `super(value)` / `super(label)`). The canonical vertex registry in `Graph` is a manual singly linked list linked through the `nextVertex` pointer, guaranteeing manual `O(V)` lookup without delegating to dictionaries or hash tables.

---

## 📄 Configuración clave / Key Configuration

**ES:** `package.json` define `"type": "module"` para ESM nativo y el script `"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js"`. `jest.config.js` fija `testEnvironment: "node"` y busca pruebas coincidentes con `test/**/*.test.js`.

**EN:** `package.json` defines `"type": "module"` for native ESM and the script `"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest.js"`. `jest.config.js` sets `testEnvironment: "node"` and discovers tests matching `test/**/*.test.js`.

---

## 🚀 Compilación y ejecución / Build & Run

```bash
npm test
```

**Salida real / Actual output:**

```text
> data_structures_advanced@1.0.0 test
> node --experimental-vm-modules ./node_modules/jest/bin/jest.js

(node:45) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
PASS test/data_structures_advanced.test.js
  TreeNode
    ✓ create a tree node (2 ms)
    ✓ absent initial links (1 ms)
    ✓ link two children
    ✓ traverse each link
    ✓ unlink children (1 ms)
  BinaryTree
    ✓ create empty (1 ms)
    ✓ insert the root
    ✓ insert lower and higher
    ✓ multilevel branches
    ✓ missing value in nonempty tree
    ✓ idempotent duplicate (1 ms)
    ✓ ordered insertions
  Graph
    ✓ create empty
    ✓ isolated vertex (1 ms)
    ✓ nonconsecutive labels and directed edge
    ✓ duplicate vertex preserves adjacency (1 ms)
    ✓ duplicate edge
    ✓ missing endpoint without mutation
    ✓ sorted neighbours and counts (1 ms)
    ✓ missing-edge query
    ✓ neighbours of missing vertex (3 ms)
    ✓ self-loop and duplicate (1 ms)
    ✓ neighbour-result isolation

Test Suites: 1 passed, 1 total
Tests:       23 passed, 23 total
Snapshots:   0 total
Time:        0.253 s, estimated 1 s
Ran all test suites.
```

---

## 🧠 Algoritmos y operaciones / Algorithms & Operations

### `Node`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Node(value)` | `number → Node` | `O(1)` | Constructor base; fija `#value`. No tiene enlaces ni validaciones. / Base constructor; sets `#value`. No links or validations. |
| `node.value` | `→ number` | `O(1)` | Getter de solo lectura (`get_value`). / Read-only getter (`get_value`). |

### `TreeNode`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new TreeNode(value)` | `number → TreeNode` | `O(1)` | Llama a `super(value)`; `#left` y `#right` inicializados en `null`. / Calls `super(value)`; `#left` and `#right` initialized to `null`. |
| `node.value` | `→ number` | `O(1)` | Heredado de `Node`. / Inherited from `Node`. |
| `node.left` | `→ TreeNode \| null` | `O(1)` | Getter (`get_left`). Ausencia es `null`. / Getter (`get_left`). Absence is `null`. |
| `node.right` | `→ TreeNode \| null` | `O(1)` | Getter (`get_right`). Ausencia es `null`. / Getter (`get_right`). Absence is `null`. |
| `node.left = target` | `TreeNode \| null → void` | `O(1)` | Setter (`set_left`). Modifica enlace izquierdo. / Setter (`set_left`). Updates left link. |
| `node.right = target` | `TreeNode \| null → void` | `O(1)` | Setter (`set_right`). Modifica enlace derecho. / Setter (`set_right`). Updates right link. |

### `BinaryTree`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new BinaryTree()` | `→ BinaryTree` | `O(1)` | Inicializa `#root = null` y `#count = 0`. / Initializes `#root = null` and `#count = 0`. |
| `tree.insert(value)` | `number → boolean` | `O(h)` | Inserción iterativa en ABB; devuelve `true` (éxito idempotente en duplicados). Incrementa `#count` solo si el valor es nuevo. / Iterative BST insertion; returns `true` (idempotent success on duplicates). Increments `#count` only if value is new. |
| `tree.contains(value)` | `number → boolean` | `O(h)` | Búsqueda iterativa siguiendo invariante ABB. Devuelve `true` si existe, `false` en caso contrario. / Iterative search following BST invariant. Returns `true` if present, `false` otherwise. |
| `tree.isEmpty` | `→ boolean` | `O(1)` | Getter (`is_empty`). Comprueba si `#count === 0`. / Getter (`is_empty`). Checks if `#count === 0`. |
| `tree.size` | `→ number` | `O(1)` | Getter (`size`). Cantidad de valores distintos. / Getter (`size`). Number of distinct values. |

### `GraphNode` (interno / internal)

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new GraphNode(label)` | `number → GraphNode` | `O(1)` | Llama a `super(label)`. Inicializa secuencia de vecinos `[]` y `nextVertex = null`. / Calls `super(label)`. Initializes neighbor sequence `[]` and `nextVertex = null`. |

### `Graph`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Graph()` | `→ Graph` | `O(1)` | Grafo vacío utilizable; `#vertices = null`, contadores a 0. / Usable empty graph; `#vertices = null`, counters at 0. |
| `graph.addVertex(label)` | `number → boolean` | `O(V)` | Registra vértice si no existe; devuelve `true` (idempotente). Conserva adyacencias existentes. / Registers vertex if absent; returns `true` (idempotent). Preserves existing adjacencies. |
| `graph.addEdge(u, v)` | `number, number → boolean` | `O(V + d(u))` | Requiere extremos existentes; devuelve `false` si alguno falta, `true` en éxito (incluye aristas duplicadas y bucles). / Requires existing endpoints; returns `false` if either missing, `true` on success (includes duplicate edges and self-loops). |
| `graph.hasEdge(u, v)` | `number, number → boolean` | `O(V + d(u))` | Comprueba arista dirigida; `false` si no existe o falta algún extremo. / Checks directed edge; `false` if absent or either endpoint missing. |
| `graph.getNeighbors(u)` | `number → number[] \| null` | `O(V + d(u) log d(u))` | Devuelve copia independiente ordenada de vecinos; `null` si `u` no existe, `[]` si está aislado. / Returns independent sorted copy of neighbors; `null` if `u` is missing, `[]` if isolated. |
| `graph.isEmpty` | `→ boolean` | `O(1)` | Getter (`is_empty`). Comprueba si `#vertexCount === 0`. / Getter (`is_empty`). Checks if `#vertexCount === 0`. |
| `graph.vertexCount` | `→ number` | `O(1)` | Getter (`vertex_count`). Cantidad de vértices explícitos registrados. / Getter (`vertex_count`). Number of explicit registered vertices. |
| `graph.edgeCount` | `→ number` | `O(1)` | Getter (`edge_count`). Cantidad de aristas dirigidas distintas. / Getter (`edge_count`). Number of distinct directed edges. |

---

## 🧩 Decisiones de diseño / Design decisions

| Decisión / Decision | Alternativa considerada / Alternative | Razón / Reason |
|---|---|---|
| Herencia real de `Node` (`extends Node`) | Valor embebido en `TreeNode` y `GraphNode` | JavaScript ES2022 soporta herencia de clases nativa y `super()`; modela fielmente la jerarquía conceptual de la especificación sin duplicar el campo del valor. / JavaScript ES2022 supports native class inheritance and `super()`; accurately models the conceptual hierarchy of the spec without duplicating the value field. |
| Registro canónico de vértices con lista enlazada simple (`nextVertex`) | `Map` o `Set` de JavaScript | La especificación prohíbe delegar el registro en tablas hash o diccionarios (`Map`/`Set`) para asegurar la implementación manual del algoritmo y el coste `O(V)`. / The specification forbids delegating the registry to hash tables or dictionaries (`Map`/`Set`) to ensure manual algorithm implementation and `O(V)` cost. |
| Getters idiomáticos JS (`size`, `isEmpty`, `vertexCount`, `edgeCount`) | Métodos `size()`, `isEmpty()`, etc. | Sigue la convención idiomática de JavaScript y de las bases homologadas del lenguaje (`data_structures_basics`), donde las propiedades de solo lectura se exponen mediante getters. / Follows JavaScript idiomatic convention and same-language homologated references (`data_structures_basics`), where read-only properties are exposed as getters. |
| Organización de tests con Jest en bloques `describe` | Un único archivo lineal sin bloques | Agrupa lógicamente los 23 casos por abstracción (`TreeNode`, `BinaryTree`, `Graph`), facilitando la trazabilidad y la lectura de resultados. / Logically groups the 23 cases per abstraction (`TreeNode`, `BinaryTree`, `Graph`), enhancing traceability and result readability. |

---

## 🔀 Adaptaciones idiomáticas / Idiomatic adaptations

| Especificación / Specification | Adaptación / Adaptation | Justificación / Justification |
|---|---|---|
| Layout `src/data_structures_advanced.ext` y `test/run_tests.ext` | `src/{Node,TreeNode,BinaryTree,Graph}.js`, `index.js`, `test/data_structures_advanced.test.js` ejecutado vía `npm test` con Jest | Organización idiomática en JavaScript/ESM donde cada clase reside en su propio módulo y Jest actúa como runner nativo. / Idiomatic JS/ESM layout where each class resides in its own module and Jest serves as the native runner. |
| `absent` en enlaces de `TreeNode` | `null` | Valor estándar y nativo de JavaScript para referencias a objetos no inicializadas o vacías. / Standard native JavaScript value for uninitialized or empty object references. |
| Operaciones de consulta (`get_value`, `get_left`, `size`, etc.) | Propiedades getter (`node.value`, `node.left`, `tree.size`, etc.) | Convención idiomática de ES2022 consistente con `data_structures_basics`. / ES2022 idiomatic convention consistent with `data_structures_basics`. |
| `Graph.get_neighbors(u)` devuelve fallo si no existe `u` | Retorna `null` si `u` no existe, `[]` si está aislado | Diferencia de manera no ambigua la ausencia del vértice (`null`) de una lista de adyacencia vacía (`[]`). / Unambiguously distinguishes missing vertex (`null`) from an empty adjacency list (`[]`). |
| Caso inmutable de `TreeNode` | Omitido (`Omitido`) | En JavaScript las clases estándar son mutables; `set left` y `set right` mutan la referencia in-place. / Standard JavaScript classes are mutable; `set left` and `set right` mutate the reference in-place. |

---

## 🚨 Indicadores de fallo / Failure indicators

| Operación / Operation | Situación de fallo / Failure situation | Indicador / Indicator | Ejemplo / Example |
|---|---|---|---|
| `TreeNode.left`, `TreeNode.right` | Enlace hijo ausente / Absent child link | `null` | `new TreeNode(10).left` → `null` |
| `BinaryTree.contains(value)` | Valor ausente en el árbol / Value absent from tree | `false` | `new BinaryTree().contains(50)` → `false` |
| `Graph.addEdge(u, v)` | Extremo `u` o `v` no registrado / Endpoint `u` or `v` not registered | `false` | `graph.addEdge(10, 99)` → `false` |
| `Graph.hasEdge(u, v)` | Arista ausente o extremos no registrados / Absent edge or unregistered endpoints | `false` | `graph.hasEdge(10, 30)` → `false` |
| `Graph.getNeighbors(u)` | Vértice `u` no registrado / Vertex `u` not registered | `null` | `graph.getNeighbors(99)` → `null` |
| Operaciones con entrada inválida | Parámetros que no corresponden al contrato | N/A (contrato asume entradas válidas de la suite) | N/A |

---

## ✅ Cobertura de pruebas / Test coverage

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test | Notas / Notes |
|---|---|:--:|---|
| **TreeNode:** Crear un nodo de árbol / Create a tree node | Sí | `test/data_structures_advanced.test.js:54` | `create a tree node` |
| **TreeNode:** Enlaces iniciales ausentes / Absent initial links | Sí | `test/data_structures_advanced.test.js:60` | `absent initial links` |
| **TreeNode:** Enlazar dos hijos / Link two children | Sí | `test/data_structures_advanced.test.js:67` | `link two children` |
| **TreeNode:** Recorrer cada enlace / Traverse each link | Sí | `test/data_structures_advanced.test.js:76` | `traverse each link` |
| **TreeNode:** Desenlazar hijos / Unlink children | Sí | `test/data_structures_advanced.test.js:89` | `unlink children` |
| **TreeNode:** Adaptación inmutable / Immutable adaptation | Omitido | N/A | No aplica: `TreeNode` en JavaScript es mutable y modifica enlaces in-place. / Not applicable: `TreeNode` in JS is mutable and mutates links in-place. |
| **BinaryTree:** Crear vacío / Create empty | Sí | `test/data_structures_advanced.test.js:111` | `create empty` |
| **BinaryTree:** Insertar la raíz / Insert the root | Sí | `test/data_structures_advanced.test.js:119` | `insert the root` |
| **BinaryTree:** Insertar menor y mayor / Insert lower and higher | Sí | `test/data_structures_advanced.test.js:128` | `insert lower and higher` |
| **BinaryTree:** Ramas de varios niveles / Multilevel branches | Sí | `test/data_structures_advanced.test.js:139` | `multilevel branches` |
| **BinaryTree:** Valor ausente en árbol no vacío / Missing value in nonempty tree | Sí | `test/data_structures_advanced.test.js:151` | `missing value in nonempty tree` |
| **BinaryTree:** Duplicado idempotente / Idempotent duplicate | Sí | `test/data_structures_advanced.test.js:160` | `idempotent duplicate` |
| **BinaryTree:** Inserciones ordenadas / Ordered insertions | Sí | `test/data_structures_advanced.test.js:171` | `ordered insertions` |
| **Graph:** Crear vacío / Create empty | Sí | `test/data_structures_advanced.test.js:188` | `create empty` |
| **Graph:** Vértice aislado / Isolated vertex | Sí | `test/data_structures_advanced.test.js:197` | `isolated vertex` |
| **Graph:** Etiquetas no consecutivas y arista dirigida / Nonconsecutive labels and directed edge | Sí | `test/data_structures_advanced.test.js:206` | `nonconsecutive labels and directed edge` |
| **Graph:** Vértice duplicado conserva adyacencia / Duplicate vertex preserves adjacency | Sí | `test/data_structures_advanced.test.js:215` | `duplicate vertex preserves adjacency` |
| **Graph:** Arista duplicada / Duplicate edge | Sí | `test/data_structures_advanced.test.js:224` | `duplicate edge` |
| **Graph:** Extremo inexistente sin mutación / Missing endpoint without mutation | Sí | `test/data_structures_advanced.test.js:233` | `missing endpoint without mutation` |
| **Graph:** Vecinos ordenados y contadores / Sorted neighbours and counts | Sí | `test/data_structures_advanced.test.js:251` | `sorted neighbours and counts` |
| **Graph:** Consulta de arista ausente / Missing-edge query | Sí | `test/data_structures_advanced.test.js:268` | `missing-edge query` |
| **Graph:** Vecinos de vértice inexistente / Neighbours of missing vertex | Sí | `test/data_structures_advanced.test.js:276` | `neighbours of missing vertex` |
| **Graph:** Bucle y duplicado / Self-loop and duplicate | Sí | `test/data_structures_advanced.test.js:284` | `self-loop and duplicate` |
| **Graph:** Aislamiento del resultado de vecinos / Neighbour-result isolation | Sí | `test/data_structures_advanced.test.js:294` | `neighbour-result isolation` |

**Trazabilidad y agrupación lógica / Traceability & Logical grouping:**
- `TreeNode` → 5 casos cubiertos (1 omitido justificadamente) → grupo lógico `describe('TreeNode')` → `test/data_structures_advanced.test.js` → Jest runner.
- `BinaryTree` → 7 casos cubiertos → grupo lógico `describe('BinaryTree')` → `test/data_structures_advanced.test.js` → Jest runner.
- `Graph` → 11 casos cubiertos → grupo lógico `describe('Graph')` → `test/data_structures_advanced.test.js` → Jest runner.
- Total: 23 tests automatizados ejecutados en verde.

---

## ⚠️ Limitaciones conocidas / Known limitations

| Limitación / Limitation | Impacto / Impact | Alternativa o plan / Workaround or plan |
|---|---|---|
| Ausencia de auto-balanceo en `BinaryTree` | Inserciones estrictamente ordenadas degeneran la altura del árbol a `O(n)` | Ninguna / None: Comportamiento conforme a la especificación de un árbol binario de búsqueda básico (los árboles auto-balanceados pertenecen a especificaciones avanzadas). / Compliant with specification for basic BST (self-balancing trees belong to advanced specifications). |
| Representación de adyacencia en array JS para vecinos | La inserción en el array de vecinos usa `Array.prototype.push` y ordenación al consultar | Conforme al contrato: la lista de adyacencia interna aísla la copia en `getNeighbors` y el registro de vértices es completamente manual. / Compliant with contract: internal adjacency isolates copies in `getNeighbors` and vertex registry is fully manual. |

---

## 📝 Notas de implementación / Implementation Notes

**ES:**
- **Jerarquía y herencia:** `Node` declara `#value` y su getter `value`. Tanto `TreeNode` como `GraphNode` heredan de `Node` llamando a `super(value)` / `super(label)`.
- **Árbol Binario de Búsqueda:** `BinaryTree` implementa inserción y búsqueda de forma iterativa, manteniendo la invariante de menores a la izquierda y mayores a la derecha. Los duplicados retornan `true` sin alterar el tamaño ni duplicar nodos en el árbol.
- **Registro canónico de vértices:** `Graph` no utiliza mapas ni objetos para indexar vértices; mantiene un puntero enlazado `#vertices` que se recorre linealmente en `O(V)` mediante `#findVertex(label)`.
- **Aislamiento de vecinos:** `getNeighbors` devuelve una copia ordenada independiente (`[...vertexU.neighbors].sort((a, b) => a - b)`), garantizando que mutaciones externas en el array devuelto no afecten la estructura interna del grafo.

**EN:**
- **Hierarchy and inheritance:** `Node` declares `#value` and its `value` getter. Both `TreeNode` and `GraphNode` inherit from `Node` calling `super(value)` / `super(label)`.
- **Binary Search Tree:** `BinaryTree` implements insertion and lookup iteratively, preserving the invariant of smaller values to the left and larger to the right. Duplicates return `true` without altering size or duplicating nodes in the tree.
- **Canonical vertex registry:** `Graph` does not use maps or objects to index vertices; it maintains a linked `#vertices` pointer traversed linearly in `O(V)` via `#findVertex(label)`.
- **Neighbor isolation:** `getNeighbors` returns an independent sorted copy (`[...vertexU.neighbors].sort((a, b) => a - b)`), ensuring that external mutations on the returned array do not affect internal graph state.

---

## 🔍 Checklist de validación / Validation checklist

- [x] La suite nativa se ejecutó y su salida real está copiada en este README.
- [x] Cada caso de la especificación tiene su fila en _Cobertura de pruebas_ (o `Omitido` con razón).
- [x] Cada desviación del pseudocódigo o de la ubicación esperada está en _Adaptaciones idiomáticas_.
- [x] Cada operación con fallo posible está en _Indicadores de fallo_.
- [x] No hay rutas absolutas del autor, credenciales ni salidas inventadas.
- [x] Los enlaces relativos resuelven dentro del repositorio y el documento es bilingüe.
- [x] Ninguna sección repite lo que ya dice la especificación.

---

## 📚 Referencias / References

| Tipo / Kind | Referencia / Reference |
|---|---|
| Especificación / Specification | [07_Data_Structures_Advanced.md](../../../../docs/core/algorithms/07_Data_Structures_Advanced.md) |
| Primera base del lenguaje / First language reference | `data_structures_basics` — [README.md](../data_structures_basics/README.md) |
| Segunda base del lenguaje / Second language reference | `numbers` — [README.md](../../foundations/numbers/README.md) |
| Guía de inicialización / Initialisation guide | [core/00_Project_Initialization_Guide.md](../../../../docs/core/00_Project_Initialization_Guide.md) |
| Adaptaciones idiomáticas / Idiomatic adaptations | [AGENT_Template.md](../../../../docs/AGENT_Template.md) |
| Validación de la documentación / Documentation validation | [WORKFLOW.md](../../../../docs/WORKFLOW.md) |
| Documentación oficial del lenguaje / Language official docs | [MDN Web Docs — Classes (ES2022)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) |

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
