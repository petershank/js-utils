"use strict";

class Node {
  constructor(data = undefined) {
    this.data = data;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(node = undefined) {
    if (node !== undefined && !(node instanceof Node)) {
      throw new Error(
        `LinkedList expected undefined or a Node but got the ${typeof node} ${node}`
      );
    }
    this.head = node;
    this.tail = node;
  }

  push(node) {
    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      let previousNode = this.tail;
      previousNode.next = node;
      this.tail = node;
    }
  }

  //   pop(node) {
  //     if (this.head === undefined) {
  //       return undefined;
  //     } else {
  //       let currentNode = this.head;
  //       while (currentNode.next !== undefined) {
  //         let previous = currentNode;
  //         currentNode = currentNode.next;
  //       }
  //       previous.next = undefined;
  //       currentNode.next = node;
  //     }
  //   }

  print() {
    let current = this.head;
    while (current !== undefined) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const george = new Node("George Washington");
const johnAdams = new Node("John Adams");
const thomas = new Node("Thomas Jefferson");
const myList = new LinkedList();
myList.push(george);
myList.push(johnAdams);
myList.push(thomas);
myList.push(new Node());
myList.push(new Node("James Monroe"));
myList.print();
console.log(``);
console.log(`first node is ${myList.head.data}`);
console.log(`final node is ${myList.tail.data}`);
