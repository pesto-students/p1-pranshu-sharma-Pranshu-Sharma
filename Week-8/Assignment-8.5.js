// In a town, there are n people labeled from 1 to n. There is a rumor that one of these
// people is secretly the town judge.

// If the town judge exists, then: 1. The town judge trusts nobody. 2. Everybody (except for
// the town judge) trusts the town judge. 3. There is exactly one person that satisfies
// properties 1 and 2.

// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled
// ai trusts the person labeled bi. Return the label of the town judge if the town judge exists
// and can be identified, or return -1 otherwise.

// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2

// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3

// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

function findTownJudge(trustArray, n) {
  let trustMap = new Map();
  for (let element of trustArray) {
    if (trustMap.has(element[1])) {
      trustMap.set(element[1], trustMap.get(element[1]) + 1);
    } else {
      trustMap.set(element[1], 1);
    }
  }

  let trustSet = new Set();
  for (let element of trustArray) {
    trustSet.add(element[0]);
  }
  for (let [key, value] of trustMap.entries()) {
    if (trustSet.size == n - 1 && !trustSet.has(key)) {
      console.log(`Town judge is ${key}`);
      return key;
    }
  }
  console.log(`Town judge doesn't exist!`);
  return -1;
}

let trustArray = [
  [1, 3],
  [2, 3],
  [4, 3],
  [3, 1],
];
findTownJudge(trustArray, 4);
