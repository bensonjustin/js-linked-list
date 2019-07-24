/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;
  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }
  function node(value) {
    return { value: value, next: null, previous: null };
  }
  function add(value) {
    let newNode = node(value);
    if (head === null) {
      head = newNode;
    } else {
      tail.next = newNode;
      newNode.previous = tail;
    }
    tail = newNode;
    return newNode;
  }
  function remove(number) {
    if (get(number) === false) {
      return false;
    }
    if (number === 0) {
      head = head.next;
    }
    let current = get(number);
    let previous = get(number - 1);
    previous.next = current.next;
    if (current.next === null) {
      tail = previous;
    }
  }
  function get(number) {
    let current = head;
    let i = 0;
    while (current !== null && i < number) {
      current = current.next;
      i++;
    }
    if (current === null) {
      return false;
    }
    return current;
  }
  function insert(value, number) {
    if (number < 0) {
      return false;
    }
    if (get(number) === false && get(number - 1) === false) {
      return false;
    }
    let newNode = node(value);
    if (number === 0) {
      newNode.next = head;
      head = newNode;
    }
    let current = get(number);
    let previous = get(number - 1);
    if (number > 0 && current !== false) {
      newNode.next = current;
      previous.next = newNode;
    }
    if (current === false && previous === tail) {
      add(value);
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
linkedListGenerator();
