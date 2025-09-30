import type { BoardWithPoints } from '../../../../common/types.ts';
import { rotateClockwise } from '../matrixOperations/matrixOperations.ts';

interface RowWithPoints {
  summed: number[];
  points: number;
}

export const isThereMoveLeft = (board: number[][]): boolean => {
  let boardToRotate = board.map((row) => [...row]);

  for (let i = 0; i < 4; i++) {
    const thereIsPlaceToMove = boardToRotate.some((row) => canRowBeMoved(row));

    if (thereIsPlaceToMove) {
      return true;
    }

    const thereAreNumbersToSum = boardToRotate.some((row) => areThereNumbersToSum(row));

    if (thereAreNumbersToSum) {
      return true;
    }

    boardToRotate = rotateClockwise(boardToRotate);
  }

  return false;
};

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

export const sumTable = (boardToCalculate: number[][]): BoardWithPoints => {
  const summedBoard = Array.from({ length: boardToCalculate.length }, () =>
    Array(boardToCalculate.length).fill(0),
  );

  let pointsForMove = 0;

  for (let rowIndex = 0; rowIndex < boardToCalculate.length; rowIndex++) {
    const row: number[] = [...boardToCalculate[rowIndex]];
    const { summed: summedRow, points } = sumRow(row);

    summedBoard[rowIndex] = [...summedRow];
    pointsForMove += points;
  }

  return { summedBoard, points: pointsForMove };
};

const sumRow = (rowToSum: number[]): RowWithPoints => {
  let moved = moveNumbers(rowToSum);
  const { summed, points } = sumAdjacentCells(moved);
  moved = moveNumbers(summed);

  return { summed: moved, points };
};

const moveNumbers = (row: number[]) => {
  const rowToSum = [...row];

  while (canRowBeMoved(rowToSum)) {
    for (let i = rowToSum.length - 1; i >= 0; i--) {
      if (rowToSum[i + 1] === 0) {
        rowToSum[i + 1] = rowToSum[i];
        rowToSum[i] = 0;
      }
    }
  }

  return rowToSum;
};

const canRowBeMoved = (row: number[]): boolean => {
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] !== 0 && row[i + 1] === 0) {
      return true;
    }
  }

  return false;
};

const sumAdjacentCells = (row: number[]): RowWithPoints => {
  const rowToMove = [...row];
  let points = 0;

  for (let i = rowToMove.length - 1; i >= 0; i--) {
    if (rowToMove[i] === rowToMove[i + 1]) {
      rowToMove[i + 1] = rowToMove[i] * 2;
      rowToMove[i] = 0;

      points += rowToMove[i + 1];
    }
  }

  return {
    summed: rowToMove,
    points,
  };
};

const areThereNumbersToSum = (row: number[]): boolean => {
  for (let i = 0; i <= row.length - 2; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      return true;
    }
  }

  return false;
};
