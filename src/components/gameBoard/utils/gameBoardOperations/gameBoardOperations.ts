export const sumTable = (boardToCalculate: number[][]): number[][] => {
  const nullMatrix = Array.from({ length: boardToCalculate.length }, () =>
    Array(boardToCalculate.length).fill(0),
  );

  for (let rowIndex = 0; rowIndex < boardToCalculate.length; rowIndex++) {
    const row: number[] = [...boardToCalculate[rowIndex]];
    const summedRow = sumRow(row);

    nullMatrix[rowIndex] = [...summedRow];
  }

  return nullMatrix;
};

const sumRow = (rowToSum: number[]): number[] => {
  const moved = moveNumbers(rowToSum);
  const summed = sumAdjacentCells(moved);

  return moveNumbers(summed);
};

const moveNumbers = (row: number[]) => {
  const rowToSum = [...row];

  while (isThereSpaceInRow(rowToSum)) {
    for (let i = rowToSum.length - 1; i >= 0; i--) {
      if (rowToSum[i + 1] === 0) {
        rowToSum[i + 1] = rowToSum[i];
        rowToSum[i] = 0;
      }
    }
  }

  return rowToSum;
};

const isThereSpaceInRow = (row: number[]): boolean => {
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] !== 0 && row[i + 1] === 0) {
      return true;
    }
  }

  return false;
};

const sumAdjacentCells = (row: number[]) => {
  const rowToMove = [...row];

  // if (areThereNumbersToSum(rowToMove)) {
  for (let i = rowToMove.length - 1; i >= 0; i--) {
    if (rowToMove[i] === rowToMove[i + 1]) {
      rowToMove[i + 1] = rowToMove[i] * 2;
      rowToMove[i] = 0;
    }
  }
  // }

  return rowToMove;
};

// const areThereNumbersToSum = (row: number[]): boolean => {
//   for (let i = 0; i <= row.length - 2; i++) {
//     if (row[i] !== 0 && row[i] === row[i + 1]) {
//       return true;
//     }
//   }
//
//   return false;
// };

export const hasBoardChanged = (initialBoard: number[][], modifiedBoard: number[][]): boolean => {
  if (initialBoard.length !== modifiedBoard.length) {
    return true;
  }

  return !initialBoard.every((row, i) => {
    if (row.length !== modifiedBoard[i]?.length) {
      return false;
    }

    return row.every((cell, j) => cell === modifiedBoard[i][j]);
  });
};

export const isThereSpaceOnBoard = (board: number[][]) => {
  return board.flat().includes(0);
};
