import styles from "./styles.module.css";

type SquareProps = {
  cellValue: number;
};

function Square({ cellValue }: SquareProps) {
  return <div className={styles.square}>{cellValue}</div>;
}

export default Square;
