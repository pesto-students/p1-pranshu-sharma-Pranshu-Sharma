// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  let root;
  root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(5);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  
  function isBST(root, left, right) {
    if (root == null) return true;
  
    if (left != null && root.data <= left.data) return false;
  
    if (right != null && root.data >= right.data) return false;
  
    return isBST(root.left, left, root) && isBST(root.right, root, right);
  }   
  
  isBST(root, null, null);
  