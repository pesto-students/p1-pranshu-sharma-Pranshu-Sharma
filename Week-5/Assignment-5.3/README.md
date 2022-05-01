# Assignment-5.3

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate.

## Solution

```sh
function hasDuplicate(array){
  if(array.length === 0){
    return 'Empty array received'
  }
  let mySet = new Set();
  for(let element of array){
    if(mySet.has(element)){
      return true;
    }
    mySet.add(element);
  }
  return false;
}

hasDuplicate(['p',1,2,3,'r']); // returns false
hasDuplicate(['p', 1, 2, 3, 'r', 'p']); // returns true
```