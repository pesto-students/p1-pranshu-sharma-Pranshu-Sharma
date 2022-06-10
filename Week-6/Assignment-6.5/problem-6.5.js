// Given an one-dimensional unsorted array A containing N integers.You are also given an
// integer B, find if there exists a pair of elements in the array whose difference is B.
// Return 1 if any such pair exists else return 0.

// Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105

// Input Format First argument is an integer array A of size N. Second argument is an integer B.
// Output Format Return 1 if any such pair exists else return 0.

// Example Input
// Input 1: A = [5, 10, 3, 2, 50, 80] B = 78
// Input 2: A = [-10, 20] B = 30

// Example Output
// Output 1: 1
// Output 2: 1

// Example Explanation
// Explanation 1: Pair (80, 2) gives a difference of 78.
// Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30

let array1 = [5, 10, 3, 2, 50, 80];
let array2 = [-10, 20];

function checkIfPairExists(array, b) {
  let pairExists = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] != array[j] && array[i] - array[j] === b) {
        pairExists = 1;
        console.log(pairExists);
        return pairExists;
      }
    }
  }
  console.log(pairExists);
  return pairExists;
}

function checkIfPairExists2(array, b) {
  let pairExists = 0;
  let size = array.length;
  let i = 0;
  let j = 1;

  array.sort((a, b) => a - b);
  while (i < size && j < size) {
    if (i != j && array[j] - array[i] == b) {
      pairExists = 1;
      console.log(pairExists);
      return pairExists;
    } else if (array[j] - array[i] < b) j++;
    else i++;
  }

  console.log(pairExists);
  return pairExists;
}

checkIfPairExists(array1, 78);
checkIfPairExists(array2, 30);

checkIfPairExists2(array1, 78);
checkIfPairExists2(array2, 30);
