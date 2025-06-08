import styles from "../../pages/application/styles.module.css";

interface MenuProps {
  score: number;
  resetBoard: () => void;
}

export function Menu({ score, resetBoard }: MenuProps) {
  return (
    <div className={styles.menu}>
      <button type={"button"} onClick={resetBoard}>
        New Game
      </button>
      <h2>Score: {score}</h2>
    </div>
  );
}
