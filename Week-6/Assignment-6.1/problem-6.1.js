// Find the contiguous subarray within an array, A of length N which has the largest sum.
// Input Format:
// The first and the only argument contains an integer array, A. Output Format: Return an
// integer representing the maximum possible sum of the contiguous subarray.
// Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:

// Input 1: A = [1, 2, 3, 4, -10]

// Output 1: 10

// Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.

// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6

// Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.

function largestSumSubArray(array) {
  let largestSum = array[0];
  let currentSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currentSum += array[i];
    if (currentSum > largestSum) {
      largestSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  console.log("largestSum > ", largestSum);
  return largestSum;
}

function largestSumSubArray2(array) {
  let largestSum = array[0];
  for (let i = 0; i < array.length; i++) {
    let subArray = [];
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      subArray.push(array[j]);
      sum += array[j];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
  }
  console.log("largestSum2 > ", largestSum);
  return largestSum;
}

largestSumSubArray([-4, -3, -3, -4, -2, -1, -1, -5, -4]);
largestSumSubArray([-2, 1, -3, 4, 1, 1, -2, 3, -5, 6]);

largestSumSubArray2([-4, -3, -3, -4, -2, -1, -1, -5, -4]);
largestSumSubArray2([-2, 1, -3, 4, 1, 1, -2, 3, -5, 6]);