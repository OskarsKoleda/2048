export const generateInitialBoard = () => {
  const board = Array.from({ length: 4 }, () => Array(4).fill(0));

  for (let i = 0; i < 2; i++) {
    let row: number;
    let col: number;

    do {
      row = Math.floor(Math.random() * 4);
      col = Math.floor(Math.random() * 4);
    } while (board[row][col] !== 0);

    board[row][col] = 2;
  }

  return board;
};

export const isTherePlaceToMove = (row: number[]): boolean => {
  for (let i = 0; i < row.length - 1; i++) {
    if (i === 0) {
      if (row[i] !== 0 && row[1] === 0) {
        return true;
      }
    } else if (i === 1) {
      if (row[i] !== 0 && row[2] === 0) {
        return true;
      }
    } else if (i === 2) {
      if (row[i] !== 0 && row[3] === 0) {
        return true;
      }
    }
  }

  return false;
};

export const isThereNumbersToSum = (row: number[]): boolean => {
  for (let i = 0; i <= row.length - 2; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      return true;
    }
  }

  return false;
};
