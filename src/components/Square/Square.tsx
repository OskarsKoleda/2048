import React, { useEffect, useRef, useState } from 'react';
import { getColorClass } from './getColorClass';
import styles from './styles.module.css';

interface SquareProps {
  squareValue: number;
}

const Square = ({ squareValue }: SquareProps) => {
  const [popping, setPopping] = useState(false);
  const prevValue = useRef(squareValue);

  // TODO: fix animations
  useEffect(() => {
    if (prevValue.current === 0 && (squareValue === 4 || squareValue === 2)) {
      setPopping(true);
      setTimeout(() => setPopping(false), 200);
    }

    prevValue.current = squareValue;
  }, [squareValue]);

  return (
    <div className={`${styles.square} ${getColorClass(squareValue)} ${popping ? styles.pop : ''}`}>
      {squareValue}
    </div>
  );
};

export default React.memo(Square);
