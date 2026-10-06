import assert from 'node:assert/strict';

import { test } from '@jest/globals';

import { LinkedList, Node, Queue, Stack } from '../index.js';

const firstNodeInput = 10;
const secondNodeInput = 20;
const firstNodeOutput = 10;
const linkedNodeOutput = 20;
const nativeAbsentLinkOutput = null;

const emptySizeOutput = 0;
const emptyValueOutput = -1;
const emptyStateOutput = true;
const insertedListSizeOutput = 4;
const deletedListSizeOutput = 3;
const listHeadAfterInsertOutput = 5;
const listHeadAfterDeleteOutput = 5;
const listHeadAfterRemovingFiveOutput = 20;
const deletePresentOutput = true;
const deleteAbsentOutput = false;

const stackPeekOutput = 30;
const stackSizeAfterPushOutput = 3;
const firstStackPopOutput = 30;
const secondStackPopOutput = 40;
const thirdStackPopOutput = 20;
const fourthStackPopOutput = 10;

const queuePeekOutput = 10;
const queueSizeAfterEnqueueOutput = 3;
const firstQueueDequeueOutput = 10;
const secondQueueDequeueOutput = 20;
const thirdQueueDequeueOutput = 30;
const fourthQueueDequeueOutput = 40;

const assertCaseEqual = (subject, description, actual, expected) => {
    assert.strictEqual(
        actual,
        expected,
        `${subject} should produce ${String(expected)} for ${description}; received ${String(actual)}`
    );
};

const runCases = (subject, cases) => {
    cases.forEach(({ description, run }) => run(description, subject));
};

test('Node', () => {
    let firstNode;
    let secondNode;

    const nodeCases = [
        {
            description: 'initialize and observe value/link',
            run: (description, subject) => {
                firstNode = new Node(firstNodeInput);

                assertCaseEqual(subject, description, firstNode.value, firstNodeOutput);
                assertCaseEqual(subject, description, firstNode.next, nativeAbsentLinkOutput);
            }
        },
        {
            description: 'initialize another node, link, and traverse',
            run: (description, subject) => {
                secondNode = new Node(secondNodeInput);
                firstNode.next = secondNode;

                assertCaseEqual(subject, description, firstNode.next.value, linkedNodeOutput);
                assertCaseEqual(subject, description, secondNode.next, nativeAbsentLinkOutput);
            }
        }
    ];

    runCases('Node', nodeCases);
});

test('LinkedList', () => {
    const list = new LinkedList();

    const linkedListCases = [
        {
            description: 'empty state',
            run: (description, subject) => {
                assertCaseEqual(subject, description, list.isEmpty, emptyStateOutput);
                assertCaseEqual(subject, description, list.size, emptySizeOutput);
                assertCaseEqual(subject, description, list.headValue, emptyValueOutput);
            }
        },
        {
            description: 'insert at both ends',
            run: (description, subject) => {
                list.insertTail(10);
                list.insertTail(20);
                list.insertHead(5);
                list.insertTail(10);

                assertCaseEqual(subject, description, list.size, insertedListSizeOutput);
                assertCaseEqual(subject, description, list.headValue, listHeadAfterInsertOutput);
            }
        },
        {
            description: 'delete first occurrence',
            run: (description, subject) => {
                assertCaseEqual(subject, description, list.delete(10), deletePresentOutput);
                assertCaseEqual(subject, description, list.size, deletedListSizeOutput);
                assertCaseEqual(subject, description, list.headValue, listHeadAfterDeleteOutput);
            }
        },
        {
            description: 'absent value',
            run: (description, subject) => {
                assertCaseEqual(subject, description, list.delete(99), deleteAbsentOutput);
                assertCaseEqual(subject, description, list.size, deletedListSizeOutput);
                assertCaseEqual(subject, description, list.headValue, listHeadAfterDeleteOutput);
            }
        },
        {
            description: 'empty the list',
            run: (description, subject) => {
                assertCaseEqual(subject, description, list.delete(5), deletePresentOutput);
                assertCaseEqual(subject, description, list.headValue, listHeadAfterRemovingFiveOutput);
                assertCaseEqual(subject, description, list.delete(20), deletePresentOutput);
                assertCaseEqual(subject, description, list.delete(10), deletePresentOutput);
                assertCaseEqual(subject, description, list.isEmpty, emptyStateOutput);
                assertCaseEqual(subject, description, list.size, emptySizeOutput);
                assertCaseEqual(subject, description, list.headValue, emptyValueOutput);
            }
        }
    ];

    runCases('LinkedList', linkedListCases);
});

test('Stack', () => {
    const stack = new Stack();

    const stackCases = [
        {
            description: 'empty state and failed removal',
            run: (description, subject) => {
                assertCaseEqual(subject, description, stack.isEmpty, emptyStateOutput);
                assertCaseEqual(subject, description, stack.size, emptySizeOutput);
                assertCaseEqual(subject, description, stack.topValue, emptyValueOutput);
                assertCaseEqual(subject, description, stack.pop(), emptyValueOutput);
            }
        },
        {
            description: 'LIFO and non-mutating peek',
            run: (description, subject) => {
                stack.push(10);
                stack.push(20);
                stack.push(30);

                assertCaseEqual(subject, description, stack.topValue, stackPeekOutput);
                assertCaseEqual(subject, description, stack.size, stackSizeAfterPushOutput);
            }
        },
        {
            description: 'removal and reuse',
            run: (description, subject) => {
                assertCaseEqual(subject, description, stack.pop(), firstStackPopOutput);
                stack.push(40);
                assertCaseEqual(subject, description, stack.pop(), secondStackPopOutput);
                assertCaseEqual(subject, description, stack.pop(), thirdStackPopOutput);
                assertCaseEqual(subject, description, stack.pop(), fourthStackPopOutput);
                assertCaseEqual(subject, description, stack.isEmpty, emptyStateOutput);
                assertCaseEqual(subject, description, stack.size, emptySizeOutput);
            }
        },
        {
            description: 'empty after removal',
            run: (description, subject) => {
                assertCaseEqual(subject, description, stack.pop(), emptyValueOutput);
                assertCaseEqual(subject, description, stack.isEmpty, emptyStateOutput);
            }
        }
    ];

    runCases('Stack', stackCases);
});

test('Queue', () => {
    const queue = new Queue();

    const queueCases = [
        {
            description: 'empty state and failed removal',
            run: (description, subject) => {
                assertCaseEqual(subject, description, queue.isEmpty, emptyStateOutput);
                assertCaseEqual(subject, description, queue.size, emptySizeOutput);
                assertCaseEqual(subject, description, queue.frontValue, emptyValueOutput);
                assertCaseEqual(subject, description, queue.dequeue(), emptyValueOutput);
            }
        },
        {
            description: 'FIFO and non-mutating peek',
            run: (description, subject) => {
                queue.enqueue(10);
                queue.enqueue(20);
                queue.enqueue(30);

                assertCaseEqual(subject, description, queue.frontValue, queuePeekOutput);
                assertCaseEqual(subject, description, queue.size, queueSizeAfterEnqueueOutput);
            }
        },
        {
            description: 'removal and reuse',
            run: (description, subject) => {
                assertCaseEqual(subject, description, queue.dequeue(), firstQueueDequeueOutput);
                queue.enqueue(40);
                assertCaseEqual(subject, description, queue.dequeue(), secondQueueDequeueOutput);
                assertCaseEqual(subject, description, queue.dequeue(), thirdQueueDequeueOutput);
                assertCaseEqual(subject, description, queue.dequeue(), fourthQueueDequeueOutput);
                assertCaseEqual(subject, description, queue.isEmpty, emptyStateOutput);
                assertCaseEqual(subject, description, queue.size, emptySizeOutput);
            }
        },
        {
            description: 'empty after removal',
            run: (description, subject) => {
                assertCaseEqual(subject, description, queue.dequeue(), emptyValueOutput);
                assertCaseEqual(subject, description, queue.isEmpty, emptyStateOutput);
            }
        }
    ];

    runCases('Queue', queueCases);
});