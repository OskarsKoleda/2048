import React from 'react';
import Square from '../../../components/Square/Square';
import styles from './styles.module.css';

interface GameBoardProps {
  board: number[][];
}

const GameBoard = ({ board }: GameBoardProps) => {
  return (
    <div className={styles.gameBoard}>
      {board.flat().map((num, index) => (
        <Square key={`${num}-${index}`} squareValue={num} />
      ))}
    </div>
  );
};

export default React.memo(GameBoard);
