export interface IQueueIterator extends Iterator<any> {
    next(): any;
    isEnd(): boolean;
}
/**
 * Priority Queue
 * lower priority items (close to 0) will be dequeued first
 */
export declare class PriorityQueue {
    private root;
    private iterator;
    constructor();
    /**
     * Add a new item to the queue according to the given priority
     * Items with priority equal an existing node will be enqueued after those node
     * @param {number} priority
     * @param {*} item
     */
    enqueue(priority: number, item: any): void;
    /**
     * Finds and removes first instance the item from the queue
     * @param item {any}
     */
    remove(item: any): void;
    /**
     * Remove the next item from the queue
     * @returns {*}
     */
    dequeue(): any;
    /**
     * Get an iterate for the queue
     * @returns {null|Iterator}
     */
    getIterator(): IQueueIterator;
    /**
     * See the next item in queue
     * @returns {*|null}
     */
    peek(): any;
    /**
     * Empty the queue
     */
    clear(): void;
    /**
     * Creates an array of the items in the priority queue
     * @returns {Array}
     */
    asArray(): any[];
}
