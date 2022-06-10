// Given an expression string x. Examine whether the pairs and the orders of
// “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for
// exp= “[()]{}{()()}” and 'false' for exp = “[(])”.

// Example 1:
// Input:
// {([])}
// Output:
// true
// Explanation:
// { ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.

// Example 2:
// Input:
// ()
// Output:
// true
// Explanation:
// (). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced
// way.

// Example 3:
// Input:
// ([]
// Output:
// false
// Explanation:
// ([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be
// unbalanced.

// Expected Time Complexity: O(|x|) Expected Auixilliary Space: O(|x|)
// Constraints: 1 ≤ |x| ≤ 32000

let string = "{([])}";

function ifBracketsAreBalanced(string) {
  if (string.length % 2 != 0) {
    return false;
  }
  let bracketsMap = new Map();
  bracketsMap.set("{", "}");
  bracketsMap.set("(", ")");
  bracketsMap.set("[", "]");
  let mid = string.length / 2;
  for (let i = 0; i < mid; i++) {
    if (bracketsMap.has(string[i])) {
      if (bracketsMap.get(string[i]) != string[string.length - 1 - i]) {
        return false;
      }
    }
  }
  return true;
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
    return str;
  }
}

function isOpeningBracket(bracket) {
  return bracket == "{" || bracket == "(" || bracket == "[";
}

function isMatching(openingBracket, closingBracket) {
  return (
    (openingBracket == "{" && closingBracket == "{") ||
    (openingBracket == "(" && closingBracket == ")") ||
    (openingBracket == "[" && closingBracket == "]")
  );
}

function ifBracketsAreBalanced2(string) {
  if (string.length % 2 != 0) {
    return false;
  }

  let stack = new Stack();
  for (let i = 0; i < string.length - 1; i++) {
    if (isOpeningBracket(string[i])) {
      stack.push(string[i]);
    } else {
      if (stack.isEmpty()) {
        return false;
      } else if (isMatching(stack.peek(), string[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

ifBracketsAreBalanced(string);
ifBracketsAreBalanced2(string);