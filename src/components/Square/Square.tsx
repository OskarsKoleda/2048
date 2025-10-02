import React from 'react';
import { getColorClass } from './getColorClass';
import styles from './styles.module.css';

interface SquareProps {
  cellValue: number;
}

const Square = ({ cellValue }: SquareProps) => {
  return <div className={`${styles.square} ${getColorClass(cellValue)}`}>{cellValue}</div>;
};

export default React.memo(Square);
