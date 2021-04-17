// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Linked List Using Javascript</h1>`;

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first Node
  insertFirstNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last Node
  insertLastNode(data) {
    let current;
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
    } else {
      const node = new Node(data);
      let current = this.head;
      let counter = 0;
      let previous;

      while (counter < index) {
        previous = current; // node before the index
        current = current.next; //node at the index
        counter++;
      }
      node.next = current;
      previous.next = node;
      this.size++;
    }
  }

  //Get at index
  getAt(index) {
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    console.log(current);
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index - 1 > this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let counter = 0;
      let previous;

      while (counter < index) {
        previous = current; //  node before index
        current = current.next; // node at index
        counter++;
      }
      previous.next = current.next;
      this.size--;
    }
  }

  clearNextRef(xNode) {
    if (xNode && xNode.next) {
      this.clearNextRef(xNode.next);
      xNode.next = null;
    }
  }

  //Clear List
  clearList() {
    this.clearNextRef(this.head);
    this.head = null;
  }

  // Print list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirstNode(20);
ll.insertLastNode(30);
ll.insertFirstNode(10);
ll.insertAt(40, 3);
ll.clearList();
ll.printList();
//ll.getAt(2);
// ll.removeAt(4);
