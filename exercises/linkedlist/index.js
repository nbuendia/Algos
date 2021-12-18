// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;
        
        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while (node) {
            if (!node.next) return node;
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) return this.head = null;

        let prevNode = this.head;
        let nextNode = this.head.next;

        while (nextNode.next) {
            prevNode = nextNode;
            nextNode = nextNode.next;
        }

        prevNode.next = null;
    }

    insertLast(data) {
        let last = this.getLast();
        if (last) last.next = new Node(data);
        if (!last) this.head = new Node(data);
    }

    getAt(idx) {
        let node = this.head;
        let count = 0;

        while (node) {
            if (count === idx) return node;
            node = node.next;
            count++;
        }

        return null;
    }

    removeAt(idx) {
        if (!this.head) return;
        if (idx === 0) {
            this.head = this.head.next;
            return;
        }

        let node = this.getAt(idx - 1);
        if (!node || !node.next) return;
        node.next = node.next.next;
    }

    insertAt(data, idx) {
        if (idx > this.size()) {
            this.insertLast(data);
            return;
        }

        if (!this.head || idx === 0) {
            this.insertFirst(data);
            return;
        }

        let node = this.getAt(idx - 1);
        let nextNode = node.next;
        node.next = new Node(data, nextNode);
    }

    forEach (callback) {
        let node = this.head;

        while (node) {
            callback(node);
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
