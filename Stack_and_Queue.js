console.log("Heyyyyyy");

// program to implement stack data structure
/*
class Stack {
  constructor() {
    this.item = [];
  }
  add(element) {
    return this.item.push(element);
  }
  remove(element) {
    return this.item.pop(element);
  }
  size() {
    return this.item.length;
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length == 0;
  }
  clear() {
    this.item = [];
  }
}
let stack = new Stack();
stack.add(7);
stack.add(14);
stack.add(21);
stack.add(28);
stack.add(35);
stack.remove();
console.log(stack.item);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.clear());
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    this.items.pop();
  }
  isEmpty() {
    if (this.items.length == 0) {
      return false;
    } else {
      return true;
    }
  }
  front() {
    return this.items[0];
  }
}

let q = new Queue();
q.enqueue(8);
q.enqueue(16);
q.enqueue(24);
q.enqueue(32);
q.enqueue(40);
q.dequeue();
console.log(q.items);
console.log(q.isEmpty());
console.log(q.front());
