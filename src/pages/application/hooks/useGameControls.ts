import {
  hasBoardChanged,
  isThereSpaceOnBoard,
} from "../utils/gameBoardOperations/gameBoardOperations.ts";
import { useCallback, useEffect } from "react";
import { VALID_KEYS } from "../constants.ts";
import { addNewNumbers } from "../utils/gameBoardPopulation/gameBoardPopulation.ts";
import { moveDown, moveLeft, moveRight, moveUp } from "../utils/gameMoves/gameMoves.ts";
import type { BoardWithPoints } from "../../../common/types.ts";

// TODO:
// 1. Add error handling for invalid board states
// 2. Add game state management (win/lose conditions)
// 3. Add move validation before performing operations
// 4. Consider adding animation states
// 5. Add keyboard event throttling to prevent rapid-fire updates

// #### Consider Move History (Optional)

interface BoardOperations {
  board: number[][];
  setBoard: (board: number[][]) => void;
  setScore: (score: number) => void;
}

const useGameControls = ({ board, setBoard, setScore }: BoardOperations) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!Object.values(VALID_KEYS).includes(e.key)) {
        return;
      }

      let gameBoard = board.map((row) => [...row]);

      const moveHandlers: Record<string, (board: number[][]) => BoardWithPoints> = {
        [VALID_KEYS.RIGHT]: moveRight,
        [VALID_KEYS.LEFT]: moveLeft,
        [VALID_KEYS.UP]: moveUp,
        [VALID_KEYS.DOWN]: moveDown,
      };

      const { summedBoard, points } = moveHandlers[e.key](gameBoard);

      if (isThereSpaceOnBoard(summedBoard) && hasBoardChanged(board, summedBoard)) {
        const updatedGameBoard = addNewNumbers(summedBoard);

        setBoard(updatedGameBoard);
        if (points > 0) {
          setScore(points);
        }
      }
    },
    [board, setBoard, setScore],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
};

export default useGameControls;
