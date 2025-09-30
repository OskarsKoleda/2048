import { useCallback, useEffect, useState } from 'react';
import { GameBoard } from '../../components/GameBoard/GameBoard.tsx';
import { Menu } from '../../components/Menu/Menu.tsx';
import { Modal } from '../../components/Modal/Modal.tsx';
import useGameControls from './hooks/useGameControls.ts';
import { generateInitialBoard } from './utils/gameBoardPopulation/gameBoardPopulation.ts';
import styles from './styles.module.css';
import { isThereMoveLeft } from './utils/gameBoardOperations/gameBoardOperations.ts';

const Application = () => {
  const [board, setBoard] = useState(generateInitialBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const updateScore = useCallback((score: number) => setScore((prev) => prev + score), [setScore]);
  const closeModal = useCallback(() => setGameOver(false), [setGameOver]);

  const resetBoard = () => {
    setBoard(generateInitialBoard());
  };

  const restartGame = () => {
    setGameOver(false);
    resetBoard();
  };

  useGameControls({ board, setBoard, setScore: updateScore });

  useEffect(() => {
    setGameOver(!isThereMoveLeft(board));
  }, [board]);

  return (
    <>
      <Modal gameOver={gameOver} onClose={closeModal} restartGame={restartGame}>
        {score}
      </Modal>
      <h1 className={styles.title}>2048</h1>
      <Menu score={score} resetBoard={resetBoard} />
      <GameBoard board={board} />
    </>
  );
};

export default Application;
