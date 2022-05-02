const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// class ListNode {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// }

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    let obj = {};
    let arr = [];
    const keyValue = "value";
    const keyNext = "next";
    let current = this.head;

    arr.push(current.value);

    while (current.next) {
      current = current.next;
      arr.push(current.value);
    }
    arr = arr.reverse();
    obj[keyValue] = arr[0];
    obj[keyNext] = null;

    for (let i = 1; i < arr.length; i++) {
      let objDop = Object.create({});
      objDop[keyValue] = arr[i];
      objDop[keyNext] = obj;
      obj = objDop;

      if (i === arr.length - 1) {
        console.debug('objDop=', objDop);
        return objDop;
      }
    }

  }

  enqueue(value) {
    if (this.length === 0) {

      this.head = new ListNode(value);;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);;
    }

    this.length++;
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue
};
