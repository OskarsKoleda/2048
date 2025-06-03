import Square from "../square/square.tsx";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import {
  rotateClockwise,
  rotateCounterClockwise,
} from "./utils/matrixOperations/matrixOperations.ts";
import {
  addNewNumbers,
  generateInitialBoard,
} from "./utils/gameBoardPopulation/gameBoardPopulation.ts";
import { isThereSpaceOnBoard, sumTable } from "./utils/gameBoardOperations/gameBoardOperations.ts";

function GameBoard() {
  const [board, setBoard] = useState(generateInitialBoard());

  // TODO: if no move can be done, ignore key press
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!["w", "a", "s", "d"].includes(e.key)) return;

      let updatedBoard = [...board.map((row) => [...row])];

      if (e.key === "d") {
        updatedBoard = sumTable(updatedBoard);
      }

      if (e.key === "a") {
        updatedBoard = sumTable(updatedBoard.map((row) => [...row].reverse()));
        updatedBoard = updatedBoard.map((row) => [...row].reverse());
      }

      if (e.key === "w") {
        const rotatedBoard = rotateClockwise(updatedBoard);

        updatedBoard = sumTable(rotatedBoard);
        updatedBoard = rotateCounterClockwise(updatedBoard);
      }

      if (e.key === "s") {
        const rotatedBoard = rotateClockwise(rotateClockwise(rotateClockwise(updatedBoard)));

        updatedBoard = sumTable(rotatedBoard);
        updatedBoard = rotateClockwise(updatedBoard);
      }

      if (isThereSpaceOnBoard(updatedBoard)) {
        updatedBoard = addNewNumbers(updatedBoard);
      }

      setBoard(updatedBoard);
    };

    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [board]);

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
