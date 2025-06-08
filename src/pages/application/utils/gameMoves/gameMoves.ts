import type { BoardWithPoints } from "../../../../common/types.ts";
import { sumTable } from "../gameBoardOperations/gameBoardOperations.ts";
import { rotateClockwise, rotateCounterClockwise } from "../matrixOperations/matrixOperations.ts";

export const moveRight = (currentBoard: number[][]) => {
  console.log("MOVE RIGHT");
  return sumTable(currentBoard);
};

export const moveLeft = (currentBoard: number[][]): BoardWithPoints => {
  const reversed = currentBoard.map((row) => [...row].reverse());
  const { summedBoard, points } = sumTable(reversed);
  const reversedBack = summedBoard.map((row: number[]) => [...row].reverse());

  return { summedBoard: reversedBack, points };
};

export const moveUp = (currentBoard: number[][]): BoardWithPoints => {
  const rotated = rotateClockwise(currentBoard);
  const { summedBoard, points } = sumTable(rotated);
  const rotatedBack = rotateCounterClockwise(summedBoard);

  return { summedBoard: rotatedBack, points };
};

export const moveDown = (currentBoard: number[][]): BoardWithPoints => {
  const rotated = rotateCounterClockwise(currentBoard);
  const { summedBoard, points } = sumTable(rotated);
  const rotatedBack = rotateClockwise(summedBoard);

  return { summedBoard: rotatedBack, points };
};
