// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,
// where k is a given positive integer smaller than or equal to length of the linked list.

// Example 1:
// Input:
// N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:
// Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

// Example 2:
// Input:N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output: 5 6 7 8 1 2 3 4

// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).
// Constraints: 1 <= N <= 103 1 <= k <= N

var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

function rotate(head, k) {
  if (k == 0) return;

  let newHead = head;
  for (let i = 0; i < k; i++) {
    newHead = newHead.next;
  }

  let newHeadEnd = newHead;
  while (newHeadEnd.next != null) {
    newHeadEnd = newHeadEnd.next;
  }

  let newTail = head;
  newHeadEnd.next = newTail;

  let newTailEnd = newTail;
  for (let i = 1; i < k; i++) {
    newTailEnd = newTailEnd.next;
  }

  newTailEnd.next = null;

  return newHead;
}

rotate(head, 3);