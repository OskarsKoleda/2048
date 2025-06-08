import Square from "../Square/Square.tsx";
import styles from "./styles.module.css";

interface GameBoardProps {
  board: number[][];
}

export function GameBoard({ board }: GameBoardProps) {
  return (
    <div className={styles.gameBoard}>
      {board.flat().map((num, index) => (
        <Square key={index} cellValue={num} />
      ))}
    </div>
  );
}
