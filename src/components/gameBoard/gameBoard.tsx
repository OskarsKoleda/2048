import Square from "../square/square.tsx";
import styles from "./styles.module.css";
import { useState } from "react";
import { generateInitialBoard, isThereNumbersToSum, isTherePlaceToMove } from "./utils.ts";

function GameBoard() {
  const [board, setBoard] = useState(generateInitialBoard());

  document.addEventListener("keydown", (e) => {
    const updatedBoard = [...board.map((row) => [...row])];

    if (e.key === "d") {
      updatedBoard.forEach((row, rowIndex) => {
        do {
          for (let i = row.length - 1; i >= 0; i--) {
            if (i === 3) {
              updatedBoard[rowIndex][i] = row[i];
              continue;
            }

            // TODO: don't multiply 0
            if (updatedBoard[rowIndex][i] === updatedBoard[rowIndex][i + 1]) {
              updatedBoard[rowIndex][i + 1] = updatedBoard[rowIndex][i] * 2;
              updatedBoard[rowIndex][i] = 0;
            } else if (updatedBoard[rowIndex][i + 1] === 0) {
              updatedBoard[rowIndex][i + 1] = updatedBoard[rowIndex][i];
              updatedBoard[rowIndex][i] = 0;
            } else {
              updatedBoard[rowIndex][i] = row[i];
            }
          }
        } while (isTherePlaceToMove(row) || isThereNumbersToSum(row));
      });

      setBoard(updatedBoard);
    }
  });

  return (
    <div>
      <h1>2048</h1>
      <div className={styles.gameBoard}>
        {board.flat().map((num, index) => (
          <Square key={index} cellValue={num} />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
