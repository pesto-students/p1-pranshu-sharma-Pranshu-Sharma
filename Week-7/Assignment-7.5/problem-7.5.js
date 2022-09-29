// Given an array arr{} of size N having distinct elements, the task is to find the next
// greater element for each element of the array in order of their appearance in the array.
// Next greater element of an element in the array is the nearest element on the right
// which is greater than the current element. If there does not exist next greater of current
// element, then next greater element for current element is -1. For example, next greater
// of the last element is always -1.

// Example 1:
// Input:
// N = 4,
// arr[] = [1 3 2 4]
// Output:3 4 4 -1
// Explanation:
// In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.

// Example 2:
// Input:
// N = 5, arr[] [6 8 0 1 3]
// Output:8 -1 1 3 -1
// Explanation:In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1,
// for 1 it is 3 and then for 3 there is no larger element on right and hence -1.

// Expected Time Complexity : O(N) Expected Auxilliary Space : O(N)
// Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018

let array = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];

function nextGreaterElement(array) {
  let newArray = [];
  let size = array.length;
  for (let i = 0; i < size; i++) {
    let element = -1;
    for (let j = i + 1; j < size; j++) {
      if (array[j] > array[i]) {
        element = array[j];
        break;
      }
    }
    newArray.push(element);
  }
  return newArray;
}

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

function nextGreaterElement2(array) {
  let newArray = [];
  let stack = new Stack();

  let size = array.length;
  for (let i = size - 1; i > -1; i--) {
    if (stack.isEmpty()) {
      newArray.push(-1);
      stack.push(array[i]);
    } else {
      if (stack.peek() > array[i]) {
        newArray.push(stack.peek());
        stack.push(array[i]);
      } else {
        while (stack.peek() <= array[i]) {
          stack.pop();
        }
        stack.isEmpty() ? newArray.push(-1) : newArray.push(stack.peek());
        stack.push(array[i]);
      }
    }
  }

  return newArray.reverse();
}

nextGreaterElement(array);
nextGreaterElement2(array);