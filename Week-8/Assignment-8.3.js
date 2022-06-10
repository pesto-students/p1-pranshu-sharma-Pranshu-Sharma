// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e.,from left to right, level by level).

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  let root;
  root = new Node(3);
  root.left = new Node(9);
  root.right = new Node(20);
  root.right.left = new Node(15);
  root.right.right = new Node(7);
  
  // Method Number 1
  
  function maxDepth(node) {
    if (node == null) {
      return 0;
    } else {
      /* compute the depth of each subtree */
      let lDepth = maxDepth(node.left);
      let rDepth = maxDepth(node.right);
  
      /* use the larger one */
      if (lDepth > rDepth) {
        return lDepth + 1;
      } else {
        return rDepth + 1;
      }
    }
  }
  
  let outputArray = [];
  function printCurrentLevel(root, level, currentlevel) {
    if (root == null) {
      return;
    }
    if (level == 1) {
      if (!outputArray[currentlevel - 1]) {
        outputArray[currentlevel - 1] = [];
        outputArray[currentlevel - 1].push(root.data);
      } else {
        outputArray[currentlevel - 1].push(root.data);
      }
      return root.data;
    } else if (level > 1) {
      printCurrentLevel(root.left, level - 1, currentlevel);
      printCurrentLevel(root.right, level - 1, currentlevel);
    }
  }
  
  let totalLevels = maxDepth(root);
  
  for (let currentlevel = 1; currentlevel <= totalLevels; currentlevel++) {
    printCurrentLevel(root, currentlevel, currentlevel);
  }
  
  console.log({ outputArray });
  
  // Method Number 2
  
  class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }
  
  let outputArray = [];
  function printLevelOrder() {
    let queue = new Queue();
    let outputArrayIndex = 0;
    queue.enqueue(root);
    queue.enqueue(null);
    while (!queue.isEmpty) {
      current = queue.dequeue();
  
      if (current == null) {
        if (queue.isEmpty) {
          return;
        }
        queue.enqueue(null);
        outputArrayIndex++;
      }else{
        if (!outputArray[outputArrayIndex]) {
          outputArray[outputArrayIndex] = [];
          outputArray[outputArrayIndex].push(current.data);
        }else{
          outputArray[outputArrayIndex].push(current.data);
        }
        if (current.left != null) {
          queue.enqueue(current.left);
        }
        if (current.right != null) {
          queue.enqueue(current.right);
        }
      }
    }
  }
  
  printLevelOrder();
  
  console.log({outputArray});
  