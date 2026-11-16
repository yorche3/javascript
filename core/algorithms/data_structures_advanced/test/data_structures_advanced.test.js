import assert from 'node:assert/strict';

import { describe, test } from '@jest/globals';

import { BinaryTree, Graph, TreeNode } from '../index.js';

const nativeAbsentLinkOutput = null;
const nativeFailureNeighborsOutput = null;
const emptyNeighborsOutput = [];

const rootInput = 10;
const leftChildInput = 20;
const rightChildInput = 30;

const treeRootInput = 50;
const treeLowerInput = 30;
const treeHigherInput = 70;
const treeLeftLeafInput = 20;
const treeRightLeafInput = 40;
const treeMissingInput = 99;

const vertexTenInput = 10;
const vertexThirtyInput = 30;
const vertexFiftyInput = 50;
const vertexSeventyInput = 70;
const missingVertexInput = 99;
const otherMissingVertexInput = 98;

const assertCaseEqual = (subject, description, actual, expected) => {
    assert.deepStrictEqual(
        actual,
        expected,
        `${subject} should produce ${JSON.stringify(expected)} for ${description}; received ${JSON.stringify(actual)}`
    );
};

const insertAll = (tree, values) => values.map((value) => tree.insert(value));

const buildGraph = (labels, edges = []) => {
    const graph = new Graph();
    labels.forEach((label) => graph.addVertex(label));
    edges.forEach(([u, v]) => graph.addEdge(u, v));
    return graph;
};

const assertCounts = (subject, description, graph, vertices, edges) => {
    assertCaseEqual(subject, `${description} (vertexCount)`, graph.vertexCount, vertices);
    assertCaseEqual(subject, `${description} (edgeCount)`, graph.edgeCount, edges);
};

describe('TreeNode', () => {
    const subject = 'TreeNode';

    test('create a tree node', () => {
        const node = new TreeNode(rootInput);

        assertCaseEqual(subject, 'create a tree node', node.value, rootInput);
    });

    test('absent initial links', () => {
        const node = new TreeNode(rootInput);

        assertCaseEqual(subject, 'absent initial left', node.left, nativeAbsentLinkOutput);
        assertCaseEqual(subject, 'absent initial right', node.right, nativeAbsentLinkOutput);
    });

    test('link two children', () => {
        const parent = new TreeNode(rootInput);
        parent.left = new TreeNode(leftChildInput);
        parent.right = new TreeNode(rightChildInput);

        assertCaseEqual(subject, 'link two children (left)', parent.left?.value, leftChildInput);
        assertCaseEqual(subject, 'link two children (right)', parent.right?.value, rightChildInput);
    });

    test('traverse each link', () => {
        const parent = new TreeNode(rootInput);
        parent.left = new TreeNode(leftChildInput);
        parent.right = new TreeNode(rightChildInput);

        assertCaseEqual(subject, 'traverse left value', parent.left?.value, leftChildInput);
        assertCaseEqual(subject, 'traverse right value', parent.right?.value, rightChildInput);
        assertCaseEqual(subject, 'left child left link', parent.left?.left, nativeAbsentLinkOutput);
        assertCaseEqual(subject, 'left child right link', parent.left?.right, nativeAbsentLinkOutput);
        assertCaseEqual(subject, 'right child left link', parent.right?.left, nativeAbsentLinkOutput);
        assertCaseEqual(subject, 'right child right link', parent.right?.right, nativeAbsentLinkOutput);
    });

    test('unlink children', () => {
        const parent = new TreeNode(rootInput);
        parent.left = new TreeNode(leftChildInput);
        parent.right = new TreeNode(rightChildInput);

        parent.left = nativeAbsentLinkOutput;
        assertCaseEqual(subject, 'clear left (left link)', parent.left, nativeAbsentLinkOutput);
        assertCaseEqual(subject, 'clear left (value)', parent.value, rootInput);
        assertCaseEqual(subject, 'clear left (right value)', parent.right?.value, rightChildInput);

        parent.right = nativeAbsentLinkOutput;
        assertCaseEqual(subject, 'clear right (left link)', parent.left, nativeAbsentLinkOutput);
        assertCaseEqual(subject, 'clear right (right link)', parent.right, nativeAbsentLinkOutput);
        assertCaseEqual(subject, 'clear right (value)', parent.value, rootInput);
    });

    // "Immutable adaptation" is not applicable: JavaScript TreeNode links are mutable in place.
});

describe('BinaryTree', () => {
    const subject = 'BinaryTree';

    test('create empty', () => {
        const tree = new BinaryTree();

        assertCaseEqual(subject, 'create empty (isEmpty)', tree.isEmpty, true);
        assertCaseEqual(subject, 'create empty (size)', tree.size, 0);
        assertCaseEqual(subject, 'create empty (contains 50)', tree.contains(treeRootInput), false);
    });

    test('insert the root', () => {
        const tree = new BinaryTree();

        assertCaseEqual(subject, 'insert the root (insert)', tree.insert(treeRootInput), true);
        assertCaseEqual(subject, 'insert the root (size)', tree.size, 1);
        assertCaseEqual(subject, 'insert the root (isEmpty)', tree.isEmpty, false);
        assertCaseEqual(subject, 'insert the root (contains)', tree.contains(treeRootInput), true);
    });

    test('insert lower and higher', () => {
        const tree = new BinaryTree();
        const results = insertAll(tree, [treeRootInput, treeLowerInput, treeHigherInput]);

        assertCaseEqual(subject, 'insert lower and higher (inserts)', results, [true, true, true]);
        assertCaseEqual(subject, 'insert lower and higher (size)', tree.size, 3);
        [treeRootInput, treeLowerInput, treeHigherInput].forEach((value) => {
            assertCaseEqual(subject, `insert lower and higher (contains ${value})`, tree.contains(value), true);
        });
    });

    test('multilevel branches', () => {
        const tree = new BinaryTree();
        const values = [treeRootInput, treeLowerInput, treeHigherInput, treeLeftLeafInput, treeRightLeafInput];
        const results = insertAll(tree, values);

        assertCaseEqual(subject, 'multilevel branches (inserts)', results, [true, true, true, true, true]);
        values.forEach((value) => {
            assertCaseEqual(subject, `multilevel branches (contains ${value})`, tree.contains(value), true);
        });
        assertCaseEqual(subject, 'multilevel branches (size)', tree.size, 5);
    });

    test('missing value in nonempty tree', () => {
        const tree = new BinaryTree();
        tree.insert(treeRootInput);

        assertCaseEqual(subject, 'missing value (contains 99)', tree.contains(treeMissingInput), false);
        assertCaseEqual(subject, 'missing value (size)', tree.size, 1);
        assertCaseEqual(subject, 'missing value (contains 50)', tree.contains(treeRootInput), true);
    });

    test('idempotent duplicate', () => {
        const tree = new BinaryTree();
        const results = insertAll(tree, [treeRootInput, treeLowerInput, treeHigherInput, treeLowerInput]);

        assertCaseEqual(subject, 'idempotent duplicate (inserts)', results, [true, true, true, true]);
        assertCaseEqual(subject, 'idempotent duplicate (size)', tree.size, 3);
        [treeRootInput, treeLowerInput, treeHigherInput].forEach((value) => {
            assertCaseEqual(subject, `idempotent duplicate (contains ${value})`, tree.contains(value), true);
        });
    });

    test('ordered insertions', () => {
        const tree = new BinaryTree();
        const values = [treeLeftLeafInput, treeLowerInput, treeRightLeafInput, treeRootInput, treeHigherInput];
        const results = insertAll(tree, values);

        assertCaseEqual(subject, 'ordered insertions (inserts)', results, [true, true, true, true, true]);
        assertCaseEqual(subject, 'ordered insertions (size)', tree.size, 5);
        values.forEach((value) => {
            assertCaseEqual(subject, `ordered insertions (contains ${value})`, tree.contains(value), true);
        });
        assertCaseEqual(subject, 'ordered insertions (contains 99)', tree.contains(treeMissingInput), false);
    });
});

describe('Graph', () => {
    const subject = 'Graph';

    test('create empty', () => {
        const graph = new Graph();

        assertCaseEqual(subject, 'create empty (isEmpty)', graph.isEmpty, true);
        assertCounts(subject, 'create empty', graph, 0, 0);
        assertCaseEqual(subject, 'create empty (hasEdge)', graph.hasEdge(vertexTenInput, vertexThirtyInput), false);
        assertCaseEqual(subject, 'create empty (getNeighbors)', graph.getNeighbors(vertexTenInput), nativeFailureNeighborsOutput);
    });

    test('isolated vertex', () => {
        const graph = new Graph();

        assertCaseEqual(subject, 'isolated vertex (addVertex)', graph.addVertex(vertexTenInput), true);
        assertCaseEqual(subject, 'isolated vertex (isEmpty)', graph.isEmpty, false);
        assertCounts(subject, 'isolated vertex', graph, 1, 0);
        assertCaseEqual(subject, 'isolated vertex (neighbors)', graph.getNeighbors(vertexTenInput), emptyNeighborsOutput);
    });

    test('nonconsecutive labels and directed edge', () => {
        const graph = buildGraph([vertexTenInput, vertexSeventyInput]);

        assertCaseEqual(subject, 'directed edge (addEdge)', graph.addEdge(vertexTenInput, vertexSeventyInput), true);
        assertCaseEqual(subject, 'directed edge (forward)', graph.hasEdge(vertexTenInput, vertexSeventyInput), true);
        assertCaseEqual(subject, 'directed edge (reverse)', graph.hasEdge(vertexSeventyInput, vertexTenInput), false);
        assertCounts(subject, 'directed edge', graph, 2, 1);
    });

    test('duplicate vertex preserves adjacency', () => {
        const graph = buildGraph([vertexTenInput, vertexThirtyInput]);

        assertCaseEqual(subject, 'duplicate vertex (addEdge)', graph.addEdge(vertexTenInput, vertexThirtyInput), true);
        assertCaseEqual(subject, 'duplicate vertex (addVertex)', graph.addVertex(vertexTenInput), true);
        assertCounts(subject, 'duplicate vertex', graph, 2, 1);
        assertCaseEqual(subject, 'duplicate vertex (neighbors)', graph.getNeighbors(vertexTenInput), [vertexThirtyInput]);
    });

    test('duplicate edge', () => {
        const graph = buildGraph([vertexTenInput, vertexThirtyInput]);

        assertCaseEqual(subject, 'duplicate edge (first)', graph.addEdge(vertexTenInput, vertexThirtyInput), true);
        assertCaseEqual(subject, 'duplicate edge (second)', graph.addEdge(vertexTenInput, vertexThirtyInput), true);
        assertCounts(subject, 'duplicate edge', graph, 2, 1);
        assertCaseEqual(subject, 'duplicate edge (neighbors)', graph.getNeighbors(vertexTenInput), [vertexThirtyInput]);
    });

    test('missing endpoint without mutation', () => {
        const graph = buildGraph([vertexTenInput, vertexThirtyInput], [[vertexTenInput, vertexThirtyInput]]);

        assertCaseEqual(subject, 'missing endpoint (10,99)', graph.addEdge(vertexTenInput, missingVertexInput), false);
        assertCaseEqual(subject, 'missing endpoint (99,10)', graph.addEdge(missingVertexInput, vertexTenInput), false);
        assertCaseEqual(subject, 'missing endpoint (98,99)', graph.addEdge(otherMissingVertexInput, missingVertexInput), false);
        assertCaseEqual(subject, 'missing endpoint (99,99)', graph.addEdge(missingVertexInput, missingVertexInput), false);
        assertCounts(subject, 'missing endpoint', graph, 2, 1);
        assertCaseEqual(subject, 'missing endpoint (neighbors 10)', graph.getNeighbors(vertexTenInput), [vertexThirtyInput]);
        assertCaseEqual(subject, 'missing endpoint (neighbors 30)', graph.getNeighbors(vertexThirtyInput), emptyNeighborsOutput);
        assertCaseEqual(subject, 'missing endpoint (has 10,99)', graph.hasEdge(vertexTenInput, missingVertexInput), false);
        assertCaseEqual(subject, 'missing endpoint (has 99,10)', graph.hasEdge(missingVertexInput, vertexTenInput), false);
        assertCaseEqual(subject, 'missing endpoint (has 98,99)', graph.hasEdge(otherMissingVertexInput, missingVertexInput), false);
        assertCaseEqual(subject, 'missing endpoint (has 99,99)', graph.hasEdge(missingVertexInput, missingVertexInput), false);
        assertCaseEqual(subject, 'missing endpoint (neighbors 98)', graph.getNeighbors(otherMissingVertexInput), nativeFailureNeighborsOutput);
        assertCaseEqual(subject, 'missing endpoint (neighbors 99)', graph.getNeighbors(missingVertexInput), nativeFailureNeighborsOutput);
    });

    test('sorted neighbours and counts', () => {
        const graph = buildGraph([vertexTenInput, vertexThirtyInput, vertexFiftyInput, vertexSeventyInput]);
        const results = [
            [vertexTenInput, vertexSeventyInput],
            [vertexTenInput, vertexThirtyInput],
            [vertexTenInput, vertexFiftyInput],
            [vertexThirtyInput, vertexFiftyInput]
        ].map(([u, v]) => graph.addEdge(u, v));

        assertCaseEqual(subject, 'sorted neighbours (addEdge)', results, [true, true, true, true]);
        assertCaseEqual(subject, 'sorted neighbours (10)', graph.getNeighbors(vertexTenInput), [30, 50, 70]);
        assertCaseEqual(subject, 'sorted neighbours (30)', graph.getNeighbors(vertexThirtyInput), [50]);
        assertCaseEqual(subject, 'sorted neighbours (50)', graph.getNeighbors(vertexFiftyInput), emptyNeighborsOutput);
        assertCaseEqual(subject, 'sorted neighbours (70)', graph.getNeighbors(vertexSeventyInput), emptyNeighborsOutput);
        assertCounts(subject, 'sorted neighbours', graph, 4, 4);
    });

    test('missing-edge query', () => {
        const graph = buildGraph([vertexTenInput, vertexThirtyInput]);

        assertCaseEqual(subject, 'missing-edge query (hasEdge)', graph.hasEdge(vertexTenInput, vertexThirtyInput), false);
        assertCounts(subject, 'missing-edge query', graph, 2, 0);
        assertCaseEqual(subject, 'missing-edge query (isEmpty)', graph.isEmpty, false);
    });

    test('neighbours of missing vertex', () => {
        const graph = buildGraph([vertexTenInput]);

        assertCaseEqual(subject, 'missing vertex (neighbors 99)', graph.getNeighbors(missingVertexInput), nativeFailureNeighborsOutput);
        assertCaseEqual(subject, 'missing vertex (neighbors 10 stays empty)', graph.getNeighbors(vertexTenInput), emptyNeighborsOutput);
        assertCounts(subject, 'missing vertex', graph, 1, 0);
    });

    test('self-loop and duplicate', () => {
        const graph = buildGraph([vertexTenInput]);

        assertCaseEqual(subject, 'self-loop (first)', graph.addEdge(vertexTenInput, vertexTenInput), true);
        assertCaseEqual(subject, 'self-loop (second)', graph.addEdge(vertexTenInput, vertexTenInput), true);
        assertCaseEqual(subject, 'self-loop (hasEdge)', graph.hasEdge(vertexTenInput, vertexTenInput), true);
        assertCaseEqual(subject, 'self-loop (neighbors)', graph.getNeighbors(vertexTenInput), [vertexTenInput]);
        assertCounts(subject, 'self-loop', graph, 1, 1);
    });

    test('neighbour-result isolation', () => {
        const graph = buildGraph(
            [vertexTenInput, vertexThirtyInput, vertexFiftyInput],
            [[vertexTenInput, vertexThirtyInput]]
        );
        const savedNeighbors = graph.getNeighbors(vertexTenInput);
        const otherCopy = graph.getNeighbors(vertexTenInput);

        assert.ok(Array.isArray(otherCopy), 'Graph should return a neighbour sequence for neighbour-result isolation');
        otherCopy.push(missingVertexInput);
        assertCaseEqual(subject, 'isolation (graph after copy change)', graph.getNeighbors(vertexTenInput), [vertexThirtyInput]);

        assertCaseEqual(subject, 'isolation (addEdge)', graph.addEdge(vertexTenInput, vertexFiftyInput), true);
        assertCaseEqual(subject, 'isolation (saved result)', savedNeighbors, [vertexThirtyInput]);
        assertCaseEqual(subject, 'isolation (fresh query)', graph.getNeighbors(vertexTenInput), [vertexThirtyInput, vertexFiftyInput]);
        assertCounts(subject, 'isolation', graph, 3, 2);
    });
});
