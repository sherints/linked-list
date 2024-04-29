class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
  
    append(value) {
      // adds a new node containing value to the end of the list
      let node = this.head;
      while (node) {
        if (node.nextNode == null) {
          node.nextNode = new Node(value);
          return;
        }
        node = node.nextNode;
      }
    }
  
    prepend(value) {
      //adds a new node containing value to the start of the list
      let oldLinkedList = this.head;
      this.head = new Node(value);
      this.head.nextNode = oldLinkedList;
    }
  
    size() {
      // returns the total number of nodes in the list
      let count = 0;
      let node = this.head;
      while (node) {
        count++;
        node = node.nextNode;
      }
      return count;
    }
  
    getHead() {
      // returns the first node in the list
      return this.head;
    }
  
    getTail() {
      // returns the last node in the list
      let node = this.head;
      while (node) {
        if (node.nextNode == null) {
          return node;
        }
        node = node.nextNode;
      }
    }
  
    at(index) {
      // returns the node at the given index
      let node = this.head;
      let currentIndex = 0;
      while (node) {
        if (index === currentIndex) {
          return node;
        }
        if (node.nextNode == null) {
          return `Please enter a correct index`;
        }
        node = node.nextNode;
        currentIndex++;
      }
    }
  
    pop() {
      //  removes the last element from the list
      let node = this.head;
      while (node) {
        if (node.nextNode.nextNode == null) {
          node.nextNode = null;
          return;
        }
        node = node.nextNode;
      }
    }
  
    contains(value) {
      // returns true if the passed in value is in the list and otherwise returns false.
      let node = this.head;
      while (node) {
        if (node.value === value) {
          return true;
        }
        if (node.nextNode === null) {
          return false;
        }
        node = node.nextNode;
      }
    }
  
    find(value) {
      // returns the index of the node containing value, or null if not found.
      let node = this.head;
      let currentIndex = 0;
      while (node) {
        if (node.value === value) {
          return `"${value}" is at index: ${currentIndex}`;
        }
        if (node.nextNode == null) {
          return `there is no node contains value "${value}"`;
        }
        currentIndex++;
        node = node.nextNode;
      }
    }
  
    toString() {
      //  represents your LinkedList objects as strings
      let node = this.head;
      let text = "";
      while (node) {
        text += `( ${node.value} ) -> `;
        if (node.nextNode == null) {
          return (text += "null");
        }
        node = node.nextNode;
      }
    }
  
    insertAt(value, index) {
      // inserts a new node with the provided value at the given index.
  
      if (index < 0 || index > this.size()) {
        throw `Index ${index} is out of bounds.`;
      }
  
      if (index === 0) {
        this.prepend(value);
        return;
      }
  
      let node = this.head;
      let currentIndex = 0;
      while (node) {
        if (currentIndex === index - 1) {
          let newNode = new Node(value, node.nextNode);
          node.nextNode = newNode;
          return;
        }
        node = node.nextNode;
        currentIndex++;
      }
    }
    removeAt(index) {
      // removes the node at the given index.
      if (index < 0 || index >= this.size()) {
        throw `Index ${index} out of bounds`;
      }
      if (index === 0) {
        this.head = node.nextNode;
        return;
      }
  
      let node = this.head;
      let currentIndex = 0;
      while (node) {
        if (currentIndex === index - 1) {
          let oldList = node.nextNode.nextNode;
          node.nextNode = oldList;
          return;
        }
  
        node = node.nextNode;
        currentIndex++;
      }
    }
  }
  
  let node1 = new Node(0);
  let node2 = new Node(1);
  let node3 = new Node(2);
  let node4 = new Node(3);
  let node5 = new Node(4);
  
  node1.nextNode = node2;
  node2.nextNode = node3;
  node3.nextNode = node4;
  node4.nextNode = node5;
  
  let list = new LinkedList(node1);
  
   console.log(list.getTail());
//   console.log(list.toString());
// console.log(list.prepend(12));
// console.log(list.toString());

console.log(list.append(55));
console.log(list.insertAt(77, 3));
console.log(list.toString());