//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    if (!this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
    }

    const parent = this.tail;
    this.tail = new Node(value);
    this.tail.prev = parent;
    parent.next = this.tail;
  }

  pop() {
    const poppedValue = this.tail.value;

    const parent = this.tail.prev;
    this.tail = parent;
    if (this.tail) {
      this.tail.next = null;
    }

    return poppedValue;
  }

  shift() {
    const shiftedValue = this.head.value;

    const child = this.head.next;
    this.head = child;
    if (this.head) {
      this.head.prev = null;
    }

    return shiftedValue;
  }

  unshift(value) {
    if (!this.tail) {
      this.head = new Node(value);
      this.tail = this.head;
    }

    const child = this.head;
    this.head = new Node(value);
    this.head.next = child;
    child.prev = this.head;
  }

  delete(value) {
    let current = this.head;

    while (current.value !== value) {
      current = current.next;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  count() {
    let total = 0;

    let current = this.head;
    while (current) {
      total += 1;
      current = current.next;
    }

    return total;
  }
}
