class Node {
  constructor(value) {
    this.value = value;
    this.child = null;
    this.parent = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    let currentNode = this.head;
    while (currentNode.child) {
      currentNode = currentNode.child;
    }
    currentNode.child = new Node(value);
    currentNode.child.parent = currentNode;
  }

  pop() {
    if (this.count() === 1) {
      this.head = null;
      return;
    };

    let currentNode = this.head;
    while (currentNode.child) {
      currentNode = currentNode.child;
    }

    const poppedValue = currentNode.value;
    currentNode = currentNode.parent;
    if (currentNode) currentNode.child = null;
    return poppedValue;
  }

  shift() {
    if (this.count() === 1) {
      this.head = null;
      return;
    };
    
    const shiftedValue = this.head.value;

    this.head = this.head.child;
    if (this.head) this.head.parent = null;

    return shiftedValue;
  }

  unshift(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    this.head.parent = new Node(value);
    this.head.parent.child = this.head;
    this.head = this.head.parent;

  }

  delete(value) {
    let valueExists = false;
    
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        valueExists = true;
        break;
      }
      currentNode = currentNode.child;
    }

    if (valueExists) {
      if (this.count() === 1) {
        this.head = null;
        return;
      };
      if (currentNode.parent) currentNode.parent.child = currentNode.child;
      if (currentNode.child) currentNode.child.parent = currentNode.parent;
      currentNode = null;
    }
  }

  count() {
    let total = 0;

    let currentNode = this.head;
    while (currentNode !== null) {
      total += 1;
      currentNode = currentNode.child;
    }

    return total;
  }
}
