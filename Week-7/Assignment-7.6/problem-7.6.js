// Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query
// of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop
// element from queue and print the poped element)

// Example 1:
// Input:
// 5
// 1 2 1 3 2 1 4 2
// Output:
// 2 3
// Explanation
// :In the first testcase
// 1 2 the queue will be {2}
// 1 3 the queue will be {2 3}
// 2 poped element will be 2 the queue will be {3}
// 1 4 the queue will be {3 4}
// 2 poped element will be 3.

// Example 2:
// Input:
// 4
// 1 2 2 2 1 4
// Output:
// 2 -1
// Explanation:
// In the second testcase
// 1 2 the queue will be {2}
// 2 poped element will be 2 and then the queue will be empty 2 the queue is empty and hence -1
// 1 4 the queue will be {4}.

// Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() and O(1) for pop()
// Expected Auxilliary Space : O(1).
// Constraints: 1 <= Q <= 100 1 <= x <= 100

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printStack() {
    var str = "Stack -> [ ";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    str += "]";
    console.log(str);
    return str;
  }
}

function performQueueOperations(inputArray) {
  let s1 = new Stack();
  let s2 = new Stack();
  let outputArray = [];
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    if (element == 1) {
      if (s1.isEmpty()) {
        s1.push(inputArray[index + 1]);
      } else {
        while (!s1.isEmpty()) {
          last_stack_1_item = s1.pop();
          s2.push(last_stack_1_item);
        }
        s1.push(inputArray[index + 1]);
        while (!s2.isEmpty()) {
          last_stack_1_item = s2.pop();
          s1.push(last_stack_1_item);
        }
      }
      index++;
    } else {
      if (s2.isEmpty()) {
        if (s1.isEmpty()) {
          outputArray.push(-1);
        } else {
          outputArray.push(s1.peek());
          s1.pop();
        }
      }
    }
  }
  return outputArray;
}

performQueueOperations([1, 2, 1, 3, 2, 1, 4, 2]);
performQueueOperations([1, 2, 2, 2, 1, 4]);