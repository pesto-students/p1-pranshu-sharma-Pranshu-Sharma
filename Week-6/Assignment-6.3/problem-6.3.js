// Problem 6.3 Sort array of 0's,1's and 2's

// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending
// order. Example 1:

// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2

// Explanation: 0's 1's and 2's are segregated into ascending order.

// Example 2:

// Input:
// N = 3
// arr[] = {0 1 0}
// Output:0 0 1

// Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2

let unsortedArray = [2, 1, 1, 0, 0, 2, 1, 0, 1, 2];

function sortArray(array){
    let zeroArray = [];
    let oneArray = [];
    let twoArray = [];
    let sortedArray = []
    for(let element of array){
        if(element === 0){
            zeroArray.push(element)
        }else if(element === 1){
            oneArray.push(element)
        }else{
            twoArray.push(element)
        }
    }
    sortedArray = [...zeroArray,...oneArray,...twoArray]
    console.log(sortedArray)
    return sortedArray
}

sortArray(unsortedArray)