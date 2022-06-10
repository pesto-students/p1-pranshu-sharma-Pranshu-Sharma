// Problem Description - Given a matrix of m * n elements (m rows, n columns), return all
// elements of the matrix in spiral order.

// Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function returnSpiralOrder(matrix) {
  let startingRowIndex = 0;
  let endingRowIndex = matrix.length;
  let startingColumnIndex = 0;
  let endingColumnIndex = matrix[0].length;
  let spiralArray = [];

  while (
    startingRowIndex < endingRowIndex &&
    startingColumnIndex < endingColumnIndex
  ) {
    for (let i = startingColumnIndex; i < endingColumnIndex; i++) {
      spiralArray.push(matrix[startingRowIndex][i]);
    }
    startingRowIndex++;

    for (let i = startingRowIndex; i < endingRowIndex; i++) {
      spiralArray.push(matrix[i][endingColumnIndex - 1]);
    }
    endingColumnIndex--;

    if (startingRowIndex < endingRowIndex) {
      for (let i = endingColumnIndex - 1; i >= startingColumnIndex; i--) {
        spiralArray.push(matrix[endingRowIndex - 1][i]);
      }
      endingRowIndex--;
    }

    if (startingColumnIndex < endingColumnIndex) {
      for (let i = endingRowIndex - 1; i >= startingRowIndex; i--) {
        spiralArray.push(matrix[i][0]);
      }
      startingColumnIndex++;
    }
  }

  console.log(spiralArray);
  return spiralArray;
}

returnSpiralOrder(matrix);
