const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.arr = [];
  }

  getUnderlyingList() {
    // создание объекта, указываем значение первого элемента массива и null для отметки что этот элемент последний
    let currentItem = {value: this.arr[0], next: null};
    //ссылка на жлемент
    let first = currentItem;
    for (let i = 1; i < this.arr.length; i++) {
      // пересоздаем объект с новым элементом списка и следующим щза ним в цикле
      currentItem.next = {value: this.arr[i], next: null};
      // обновляем текущий элемент в списке
      currentItem = currentItem.next;
    }
    return first;
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    //проверка на наличие элементов в массиве и возвращаем первый элемент
    if (this.arr.length !== 0) {
      return this.arr.shift();
    } else {
      return undefined; 
    }
  }
}

module.exports = {
  Queue
};
