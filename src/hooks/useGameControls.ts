import { useCallback, useEffect } from 'react';
import type { BoardWithPoints } from '../common/types.ts';
import { VALID_KEYS } from '../pages/application/constants.ts';
import {
  hasBoardChanged,
  isThereSpaceOnBoard,
} from '../pages/application/utils/gameBoardOperations/gameBoardOperations.ts';
import { addNewNumbers } from '../pages/application/utils/gameBoardPopulation/gameBoardPopulation.ts';
import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from '../pages/application/utils/gameMoves/gameMoves.ts';

interface BoardOperations {
  board: number[][];
  setBoard: (board: number[][]) => void;
  setScore: (score: number) => void;
}

const useGameControls = ({ board, setBoard, setScore }: BoardOperations) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!Object.values(VALID_KEYS).includes(e.key) || e.repeat) {
        return;
      }

      const boardCopy = board.map((row) => [...row]);

      const moveHandlers: Record<string, (board: number[][]) => BoardWithPoints> = {
        [VALID_KEYS.RIGHT]: moveRight,
        [VALID_KEYS.LEFT]: moveLeft,
        [VALID_KEYS.UP]: moveUp,
        [VALID_KEYS.DOWN]: moveDown,
      };

      const { summedBoard, points } = moveHandlers[e.key](boardCopy);

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
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};

export default useGameControls;
