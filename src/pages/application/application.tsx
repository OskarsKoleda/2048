import { useCallback, useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal.tsx';
import useGameControls from '../../hooks/useGameControls.ts';
import GameBoard from './GameBoard/GameBoard.tsx';
import Menu from './Menu/Menu.tsx';
import styles from './styles.module.css';
import { isThereMoveLeft } from './utils/gameBoardOperations/gameBoardOperations.ts';
import { generateInitialBoard } from './utils/gameBoardPopulation/gameBoardPopulation.ts';

const Application = () => {
  const [board, setBoard] = useState(generateInitialBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const updateScore = useCallback(
    (score: number) => {
      setScore((prevScore) => prevScore + score);
    },
    [setScore],
  );

  const closeModal = useCallback(() => {
    setGameOver(false);
  }, [setGameOver]);

  const resetBoard = useCallback(() => {
    setBoard(generateInitialBoard());
  }, [setBoard]);

  const restartGame = useCallback(() => {
    setGameOver(false);
    resetBoard();
  }, [resetBoard]);

  useGameControls({ board, setBoard, setScore: updateScore });

  useEffect(() => {
    setGameOver(!isThereMoveLeft(board));
  }, [board]);

  return (
    <>
      <h1 className={styles.title}>2048</h1>
      <Menu score={score} resetBoard={resetBoard} />
      <GameBoard board={board} />
      {gameOver && (
        <Modal onClose={closeModal} onAction={restartGame} actionButtonText="New Game">
          <div className={styles.modalContent}>
            <p>Game Over!</p>
            <p>Your Score: {score}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Application;
