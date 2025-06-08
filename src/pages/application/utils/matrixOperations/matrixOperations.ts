export const rotateClockwise = (matrix: number[][]) => {
  return reverseMatrixRows(transposeSquareMatrix(matrix));
};

export const rotateCounterClockwise = (matrix: number[][]) => {
  return reverseMatrixCols(transposeSquareMatrix(matrix));
};

const transposeSquareMatrix = (matrix: number[][]) => {
  const nullMatrix = Array.from({ length: matrix.length }, () => Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      nullMatrix[j][i] = matrix[i][j];
    }
  }

  return nullMatrix;
};

const reverseMatrixRows = (matrix: number[][]) => {
  return [...matrix].map((row) => [...row].reverse());
};

const reverseMatrixCols = (matrix: number[][]) => {
  return [...matrix].map((row) => [...row]).reverse();
};
