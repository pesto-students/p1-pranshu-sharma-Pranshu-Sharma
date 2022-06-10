// Assignment-3.1

// Create a memoize function that remembers previous inputs and stores them in cache so that it
// won’t have to compute the same inputs more than once. The function will take an unspecified number of integer inputs and a reducer method.

// Example

//Given reducer method:
// function add(a,b){
//     return a+b
// }

//Create a method called memoize such that:
// const memoizeAdd = memoize(add);

//and call...
// memoizeAdd(100,100); //returns 200
// memoizeAdd(100); //returns 100
// memoizeAdd(100,200); //returns 300
// memoizeAdd(100,100); //returns 200 without computing


// Solution

//Reducer method:
function add(a=0,b=0){
    return a+b;
}

// memoize function
function memoize(func){
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    if(cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, func(...args));
    return cache.get(key);
  };
};

const memoizeAdd = memoize(add);

memoizeAdd(100,100); //returns 200 in 0.10302734375ms
memoizeAdd(100); //returns 100 in 0.035888671875ms
memoizeAdd(100,200); //returns 300 in 0.0400390625ms
memoizeAdd(100,100); //returns 200 without computing in 0.0390625ms as the return value is already present in cache


// Explanation

// Memoize function is taking a function as an argument(which is add function). These are the steps it performs -
// - Creates a cache memory using Map(object can also be used).
// - Creates a string by combining all the arguments.
// - Checks the cache if this string matches with any on its keys.
// - If there's already a key matching to this string, then its corresponding value is returned. Else a key value pair is created using this string as a key and result of function as the value, which works as a cached result for future computations.