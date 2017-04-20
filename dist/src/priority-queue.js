'use strict';
/**
 * Created by gjrwcs on 2/21/2017.
 */
class QueueNode {
    /**
     * Priority Queue Node
     * @param priority
     * @param item
     */
    constructor(priority, item) {
        this.priority = priority;
        this.item = item;
        this.next = null;
    }
}
class QueueIterator {
    /**
     * Priority Queue Iterator
     * @param root
     * @constructor
     */
    constructor(root) {
        this.current = root;
    }
    /**
     * Traverses the iterator to the next node and returns its item
     * @returns {*}
     */
    next() {
        if (this.current) {
            const node = this.current;
            this.current = node.next;
            return node.item;
        }
        return null;
    }
    /**
     * Indicates if the iterator has traversed all nodes
     * @returns {boolean}
     */
    isEnd() {
        return this.current === null;
    }
    resetRoot(root) {
        this.current = root;
    }
}
/**
 * Priority Queue
 * lower priority items (close to 0) will be dequeued first
 */
class PriorityQueue {
    constructor() {
        this.root = null;
        this.iterator = null;
    }
    /**
     * Add a new item to the queue according to the given priority
     * Items with priority equal an existing node will be enqueued after those node
     * @param {number} priority
     * @param {*} item
     */
    enqueue(priority, item) {
        const node = new QueueNode(priority, item);
        if (this.root === null) {
            this.root = node;
        }
        else if (priority < this.root.priority) {
            node.next = this.root;
            this.root = node;
        }
        else {
            let current = this.root;
            while (current.next !== null) {
                if (priority >= current.next.priority) {
                    current = current.next;
                }
                else {
                    node.next = current.next;
                    current.next = node;
                    return;
                }
            }
            current.next = node;
        }
    }
    /**
     * Finds and removes first instance the item from the queue
     * @param item {any}
     */
    remove(item) {
        let node = this.root;
        let prev = null;
        do {
            if (node.item === item) {
                if (prev !== null) {
                    prev.next = node.next;
                }
                else {
                    this.root = node.next;
                }
                break;
            }
            prev = node;
            node = node.next;
        } while (node !== null);
    }
    /**
     * Remove the next item from the queue
     * @returns {*}
     */
    dequeue() {
        if (this.root !== null) {
            const node = this.root;
            this.root = node.next;
            return node.item;
        }
        return null;
    }
    /**
     * Get an iterate for the queue
     * @returns {null|Iterator}
     */
    getIterator() {
        if (this.iterator === null) {
            this.iterator = new QueueIterator(this.root);
        }
        this.iterator.resetRoot(this.root);
        return this.iterator;
    }
    /**
     * See the next item in queue
     * @returns {*|null}
     */
    peek() {
        return this.root !== null ? this.root.item : null;
    }
    /**
     * Empty the queue
     */
    clear() {
        this.root = null;
    }
    /**
     * Creates an array of the items in the priority queue
     * @returns {Array}
     */
    asArray() {
        const arr = [];
        const it = this.getIterator();
        while (!it.isEnd()) {
            arr.push(it.next());
        }
        return arr;
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priority-queue.js.map