import React from 'react';
import Square from '../../../components/Square/Square';
import styles from './styles.module.css';

interface GameBoardProps {
  board: number[][];
}

const GameBoard = ({ board }: GameBoardProps) => {
  return (
    <div className={styles.gameBoard}>
      {board.map((row, rowIdx) =>
        row.map((num, colIdx) => <Square key={`${rowIdx}-${colIdx}`} squareValue={num} />),
      )}
    </div>
  );
};

export default React.memo(GameBoard);
