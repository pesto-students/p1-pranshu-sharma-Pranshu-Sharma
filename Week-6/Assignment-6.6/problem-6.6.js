// Given an array S of n integers, find three integers in S such that the sum is closest to a
// given number, target.Return the sum of the three integers.Assume that there will only be
// one solution

// Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the
// target is 2. (-1 + 2 + 1 = 2)

let S = [-1, 3, 1, -4];

function closestSumIntegers(array, target) {
  array.sort((a, b) => a - b);
  let closestSum = array[0] + array[1] + array[2];
  for (let i = 0; i < array.length - 2; i++) {
    let start = i + 1;
    let end = array.length - 1;
    while (start < end) {
      const sum = array[i] + array[start] + array[end];
      if (sum > target) {
        end--;
      } else {
        start++;
      }
      if (Math.abs(target - sum) <= Math.abs(target - closestSum)) {
        closestSum = sum;
      }
    }
  }
  console.log(`${closestSum} is closest to the target ${target}`);
  return `${closestSum} is closest to the target ${target}`;
}

closestSumIntegers(S, -3);