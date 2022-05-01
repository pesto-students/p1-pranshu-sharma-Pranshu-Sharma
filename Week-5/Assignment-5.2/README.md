# Assignment-5.2

Write a function called vowelCount which accepts a string and returns a map where the keys are letters and the values are the count of the vowels in the string.

## Solution

```sh
function vovelCount(string){
  if(!string){
    return 'Empty string received';
  }
  const vowelMap = new Map();
  const vowelsArray = ['a','e','i','o','u'];
  for(let character of string){
    if(vowelsArray.includes(character.toLowerCase())){
      if(vowelMap.has(character)){
        vowelMap.set(character,vowelMap.get(character)+1);
      }else{
        vowelMap.set(character,1);
      }
    }
  }
  return vowelMap;
}

vovelCount('My name is Pranshu Sharma') // returns {'a' => 4, 'e' => 1, 'i' => 1, 'u' => 1}
```