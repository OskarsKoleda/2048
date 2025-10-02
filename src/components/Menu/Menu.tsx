import styles from './styles.module.css';

interface MenuProps {
  score: number;
  resetBoard: () => void;
}

// TODO: Refactor Menu component to improve accessibility and styling, and consider separating button and score display into smaller components if needed.
const Menu = ({ score, resetBoard }: MenuProps) => {
  return (
    <div className={styles.menu}>
      <button type="button" onClick={resetBoard}>
        New Game
      </button>
      <h2>Score: {score}</h2>
    </div>
  );
};

export default Menu;
