import Square from "../square/square.tsx";
import styles from "./styles.module.css";
import { useState } from "react";
import { generateInitialBoard } from "./utils/gameBoardPopulation/gameBoardPopulation.ts";
import useGameControls from "./useGameControls.ts";

function GameBoard() {
  const [board, setBoard] = useState<number[][]>(generateInitialBoard());

  useGameControls({ board, setBoard });

  return (
    <div>
      <h1 style={{ fontSize: "48px" }}>2048</h1>
      <div className={styles.gameBoard}>
        {board.flat().map((num, index) => (
          <Square key={index} cellValue={num} />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
