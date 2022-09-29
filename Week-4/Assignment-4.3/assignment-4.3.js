// Assignment-4.3

// Implement Fibonacci Series with Iterators:

// Sample output:

// The Fibonacci Series is:
// 0
// 1
// 1
// 2
// 3
// 5
// 8


// Solution 1 (using next function)

function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2)
}

function fibSeries(length){
  let counter = -1;
  return {
    next(){
      counter++;
      if(counter <= length){
        return { value: fibonacci(counter), done: false}
      }
      return { value: undefined, done: true}
    }
  }
}

const fibSeriesIterator = fibSeries(6);

console.log('The Fibonacci Series is:');
console.log(fibSeriesIterator.next());
console.log(fibSeriesIterator.next());
console.log(fibSeriesIterator.next());
console.log(fibSeriesIterator.next());
console.log(fibSeriesIterator.next());
console.log(fibSeriesIterator.next());
console.log(fibSeriesIterator.next());
console.log(fibSeriesIterator.next());

// Output

// The Fibonacci Series is:
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 5, done: false }
// { value: 8, done: false }
// { value: undefined, done: true }


// Solution 2 (using Symbol.iterator)

function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2)
}

function fibSeries(length){
  return{
    [Symbol.iterator](){
      let counter = -1;
      return {
        next(){
          counter++;
          if(counter <= length){
            return { value: fibonacci(counter), done: false}
          }
          return { value: undefined, done: true}
        }
      }
    }
  }
}

console.log('The Fibonacci Series is:');

for(const n of fibSeries(6)){
  console.log(n)
}

// Output

// The Fibonacci Series is:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
