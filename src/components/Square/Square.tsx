import React from 'react';
import { getColorClass } from './getColorClass';
import styles from './styles.module.css';

interface SquareProps {
  squareValue: number;
}

const Square = ({ squareValue }: SquareProps) => {
  return <div className={`${styles.square} ${getColorClass(squareValue)}`}>{squareValue}</div>;
};

export default React.memo(Square);
