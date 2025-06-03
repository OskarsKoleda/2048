import {
  hasBoardChanged,
  isThereSpaceOnBoard,
  sumTable,
} from "./utils/gameBoardOperations/gameBoardOperations.ts";
import {
  rotateClockwise,
  rotateCounterClockwise,
} from "./utils/matrixOperations/matrixOperations.ts";
import { useCallback, useEffect } from "react";
import { VALID_KEYS } from "./constants.ts";
import { addNewNumbers } from "./utils/gameBoardPopulation/gameBoardPopulation.ts";

// TODO:
// 1. Add error handling for invalid board states
// 2. Add game state management (win/lose conditions)
// 3. Add move validation before performing operations
// 4. Consider adding animation states
// 5. Add keyboard event throttling to prevent rapid-fire updates

interface BoardOperations {
  board: number[][];
  setBoard: (board: number[][]) => void;
}

const useGameControls = ({ board, setBoard }: BoardOperations) => {
  const moveRight = (currentBoard: number[][]) => {
    return sumTable(currentBoard);
  };

  const moveLeft = (currentBoard: number[][]) => {
    const reversed = currentBoard.map((row) => [...row].reverse());
    const summed = sumTable(reversed);

    return summed.map((row) => [...row].reverse());
  };

  const moveUp = (currentBoard: number[][]) => {
    const rotated = rotateClockwise(currentBoard);
    const summed = sumTable(rotated);

    return rotateCounterClockwise(summed);
  };

  const moveDown = (currentBoard: number[][]) => {
    const rotated = rotateCounterClockwise(currentBoard);
    const summed = sumTable(rotated);

    return rotateClockwise(summed);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!Object.values(VALID_KEYS).includes(e.key)) {
        return;
      }

      let gameBoard = board.map((row) => [...row]);

      const moveHandlers: Record<string, (board: number[][]) => number[][]> = {
        [VALID_KEYS.RIGHT]: moveRight,
        [VALID_KEYS.LEFT]: moveLeft,
        [VALID_KEYS.UP]: moveUp,
        [VALID_KEYS.DOWN]: moveDown,
      };

      gameBoard = moveHandlers[e.key](gameBoard);

      if (isThereSpaceOnBoard(gameBoard) && !hasBoardChanged(board, gameBoard)) {
        gameBoard = addNewNumbers(gameBoard);
        setBoard(gameBoard);
      }
    },
    [board, setBoard],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
};

export default useGameControls;
