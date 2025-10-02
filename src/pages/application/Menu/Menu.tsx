import styles from './styles.module.css';

interface MenuProps {
  score: number;
  resetBoard: () => void;
}

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
