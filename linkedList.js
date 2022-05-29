"use strict";

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(node = null) {
    if (node !== null && !(node instanceof Node)) {
      throw new Error(
        `LinkedList expected null or a Node but got the ${typeof node} ${node}`
      );
    }
    this.head = node;
  }

  append(node) {
    if (this.head === null) {
      this.head = node;
    }
    // this.head = node;
    // while (currentNode.next !== null) {
    //   currentNode = currentNode.next;
    // }
    // currentNode.next = node;
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const george = new Node("George");
// console.log(george);

const myList = new LinkedList();
console.log(myList);
myList.append(george);
console.log(myList);
// myList.append(george);
// console.log(myList);

// const myNode = new Node();

// myList.head.next = new Node(4);
// console.log(myList.head.next);
// console.log(new LinkedList(new Node("hello")));
// console.log(myNode);
// console.log(myList.append());
// myList.print();
// console.log(typeof myList);
