import styles from "./styles.module.css";
import { useCallback, useState } from "react";
import { generateInitialBoard } from "./utils/gameBoardPopulation/gameBoardPopulation.ts";
import useGameControls from "./hooks/useGameControls.ts";
import { GameBoard } from "../../components/GameBoard/GameBoard.tsx";
import { Menu } from "../../components/Menu/Menu.tsx";

function Application() {
  const [board, setBoard] = useState(generateInitialBoard());
  const [score, setScore] = useState(0);

  const updateScore = useCallback((score: number) => setScore((prev) => prev + score), [setScore]);

  useGameControls({ board, setBoard, setScore: updateScore });

  const resetBoard = () => {
    setBoard(generateInitialBoard());
  };

  return (
    <>
      <h1 className={styles.title}>2048</h1>
      <Menu score={score} resetBoard={resetBoard} />
      <GameBoard board={board} />
    </>
  );
}

export default Application;
