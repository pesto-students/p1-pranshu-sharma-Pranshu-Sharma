// Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked
// list can contain self loop.

// Example 1:
// Input:
// N = 3
// value[] = {1,3,4}
// x = 2
// Output: True
// Explanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is given
// which means last node is connected with xth node of linked list. Therefore, there exists a loop.

// Example 2:
// Input:
// N = 4
// value[] = {1,8,3,4}
// x = 0
// Output: False
// Explanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not contains
// any loop.

// Expected Time Complexity: O(N) Expected Auxiliary Space: O(1)
// Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103

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

let head2 = head.next.next.next;
head2.next = head.next;

function checkIfLoopExists(head) {
  let linkedListMap = new Map();
  while (head.next != null) {
    head = head.next;
    if (linkedListMap.has(head)) {
      console.log("Linked List has a loop!");
      return linkedListMap.get(head);
    } else {
      linkedListMap.set(head, head);
      count++;
    }
  }
  console.log("Linked List doesn't have a loop!");
  return null;
}

// Using Floyd's Cycle Detection Algorithm

function detectCycle(head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer != null || fastPointer.next != null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer == fastPointer) {
      console.log("Linked List has a loop!");
      return slowPointer;
    }
  }
  console.log("Linked List doesn't have a loop!");
  return null;
}

function checkIfLoopExists2(head) {
  let meet = detectCycle(head);
  let start = head;
  while (start != meet) {
    start = start.next;
    meet = meet.next;
  }
  return start;
}

checkIfLoopExists(head);
checkIfLoopExists2(head);