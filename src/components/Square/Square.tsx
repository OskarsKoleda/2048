import React from 'react';
import styles from './styles.module.css';

interface SquareProps {
  cellValue: number;
}

const getColorClass = (value: number): string => {
  switch (value) {
    case 2:
      return styles.value2;
    case 4:
      return styles.value4;
    case 8:
      return styles.value8;
    case 16:
      return styles.value16;
    case 32:
      return styles.value32;
    case 64:
      return styles.value64;
    case 128:
      return styles.value128;
    case 256:
      return styles.value256;
    case 512:
      return styles.value512;
    case 1024:
      return styles.value1024;
    case 2048:
      return styles.value2048;
    default:
      return styles.value0;
  }
};

const Square = ({ cellValue }: SquareProps) => {
  return <div className={`${styles.square} ${getColorClass(cellValue)}`}>{cellValue}</div>;
};

export default React.memo(Square);
