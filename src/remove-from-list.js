const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  //проверка на наличие k
  if (!k) {
    return l;
  }
  // завершаем рекурсию, если l = false
  if (!l) {
    return l;
  }
  //вызов рекурсии для следующего элемента списка
  l.next = removeKFromList(l.next, k);
  //удаляем элемент если он = k, и возвращаем следующий
  if (l.value === k) {
    return l.next;
  } else {
    return l;
  }
}

module.exports = {
  removeKFromList
};
