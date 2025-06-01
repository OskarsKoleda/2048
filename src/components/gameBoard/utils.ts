// TODO: remove magic numbers
export const generateInitialBoard = () => {
  const board = Array.from({ length: 4 }, () => Array(4).fill(0));

  for (let i = 0; i < 2; i++) {
    const [row, col] = getRandomCoords(board);

    board[row][col] = 2;
  }

  return board;
};

export const addNewNumbers = (board: number[][]) => {
  const [row, col] = getRandomCoords(board);

  board[row][col] = 2;
  
  return board;
};

const getRandomCoords = (currentBoard: number[][]) => {
  let row: number;
  let col: number;

  do {
    row = Math.floor(Math.random() * 4);
    col = Math.floor(Math.random() * 4);
  } while (currentBoard[row][col] !== 0);

  return [row, col];
};

export const sumTable = (boardToCalculate: number[][]): number[][] => {
  const nullMatrix = Array.from({ length: boardToCalculate.length }, () =>
    Array(boardToCalculate.length).fill(0),
  );

  for (let rowIndex = 0; rowIndex < boardToCalculate.length; rowIndex++) {
    const row: number[] = [...boardToCalculate[rowIndex]];
    const summedRow = performSum(row);

    nullMatrix[rowIndex] = [...summedRow];
  }

  return nullMatrix;
};

const performSum = (rowToSum: number[]): number[] => {
  while (isTherePlaceToMove(rowToSum) || isThereNumbersToSum(rowToSum)) {
    for (let i = rowToSum.length - 1; i >= 0; i--) {
      if (rowToSum[i + 1] === 0) {
        rowToSum[i + 1] = rowToSum[i];
        rowToSum[i] = 0;
      } else if (rowToSum[i] === rowToSum[i + 1]) {
        rowToSum[i + 1] = rowToSum[i] * 2;
        rowToSum[i] = 0;
      }
    }
  }

  return rowToSum;
};

const isTherePlaceToMove = (row: number[]): boolean => {
  for (let i = 0; i < row.length - 1; i++) {
    if (i === 0) {
      if (row[i] !== 0 && row[1] === 0) {
        return true;
      }
    } else if (i === 1) {
      if (row[i] !== 0 && row[2] === 0) {
        return true;
      }
    } else if (i === 2) {
      if (row[i] !== 0 && row[3] === 0) {
        return true;
      }
    }
  }

  return false;
};

const isThereNumbersToSum = (row: number[]): boolean => {
  for (let i = 0; i <= row.length - 2; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      return true;
    }
  }

  return false;
};

export const rotateClockwise = (matrix: number[][]) => {
  return reverseArrayRows(transposeArray(matrix));
};

const transposeArray = (matrix: number[][]) => {
  const nullMatrix = Array.from({ length: matrix.length }, () => Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      nullMatrix[j][i] = matrix[i][j];
    }
  }

  return nullMatrix;
};

const reverseArrayRows = (matrix: number[][]) => {
  return Array.from(matrix, (row) => row.reverse());
};
