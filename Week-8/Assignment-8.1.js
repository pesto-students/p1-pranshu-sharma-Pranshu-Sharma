// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  var binaryTree = new Node(3);
  binaryTree.left = new Node(9);
  binaryTree.right = new Node(20);
  binaryTree.right.left = new Node(15);
  binaryTree.right.right = new Node(7);
  
  var binaryTree2 = new Node(1);
  binaryTree2.right = new Node(2);
  
  function maxDepth(node) {
    if (node == null) {
      return 0;
    } else {
      let lDepth = maxDepth(node.left);
      let rDepth = maxDepth(node.right);
  
      if (lDepth > rDepth) {
        return lDepth + 1;
      } else {
        return rDepth + 1;
      }
    }
  }
  
  maxDepth(binaryTree);
  maxDepth(binaryTree2);
  