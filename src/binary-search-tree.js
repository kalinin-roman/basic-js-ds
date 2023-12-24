const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    // корневой узел отсутствует по умолчанию
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      //проверка на наличие узла, если нет - добавляем
      this.rootNode = newNode;
    } else {
      // если корн. узел уже есть то вставляем созданный узел в стр-ру данных
      this.addWithin(this.rootNode, newNode);
    }
  }

  addWithin(node, newNode) {
    if (newNode.data < node.data) {
      // сравниваем значения нового и текущего узла
      // и если значение нового узла меньше значения тек. узла смотрим налево
      if (!node.left) {
        // если у текущего узла нет левого потомка
        node.left = newNode;
        // то ставим новый узел на место левого потомка
      } else {
        // если левый потомок у тек. узла есть
        this.addWithin(node.left, newNode);
        // вызываем функцию снова для левого потомка этого узла и проверяем его глубже
      }
    } else {
      // если значение нов. узла больше или равно знач-ию тек. узла смотрим направо
      if (!node.right) {
        // если у тек. узла нет правого потомка
        node.right = newNode;
        // им становится новый узел
      } else {
        // есди правый потомок у тек. узла есть
        this.addWithin(node.right, newNode);
        // идем глубже вниз по правому потомку тек. узла = рекурсивный вызов ф-ии
      }
    }
  }

  has(data) {
    // если данные не найдены возвращается false иначе true
    return this.searchWithin(this.rootNode, data) !== null;
  }

  find(data) {
    // если данные найдены возвращает ссылку на узел, если нет, то null
    return this.searchWithin(this.rootNode, data);
  }

  searchWithin(node, data) {
    // если не нашли || искомое значение = data, возвращаем узел
    if (!node || node.data === data) {
      return node;
    } else {
      //если узел есть, но значение отличается и
      //ищем дальше по узлам в зависимости от > или <
      return data < node.data
        ? this.searchWithin(node.left, data)
        : this.searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;
    //определяем в какую сторону пойти в зависимости от < или > значение
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      //значение одинаковое и проверка на то, что нет ОБОИХ потомков
      if (!node.left && !node.right) return null;
      //если нет левого потомка значит, есть правый и его помещяем в node
      if (!node.left) {
        node = node.right;
        return node;
      }
      //то же самое, только для правого потомка
      if (!node.right) {
        node = node.left;
        return node;
      }
      // если есть оба поддерева, то будем искать минимум среди правого поддерева
      let minFromRight = node.right;
      //идем в лево до конца и ищем самый маленький элемент
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      //помещаем минимальное значение в значение удаляемого узла
      node.data = minFromRight.data;
      //удаляем узел с минимальным значением из правого поддерева
      node.right = this.removeNode(node.right, minFromRight.data);
      //по реккурсии возвращаем узел
      return node;
    }
    // обновляем ссылку на узел
  }

  min() {
    //проверка на то, есть ли вообще элементы
    if (!this.rootNode) return;
    // поиск минимального
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    //проверка на то, есть ли вообще элементы
    if (!this.rootNode) return;
    // поиск максимального
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
