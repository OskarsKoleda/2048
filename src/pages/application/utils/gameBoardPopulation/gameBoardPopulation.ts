// TODO: remove magic numbers
export const generateInitialBoard = () => {
  const board = Array.from({ length: 4 }, () => Array(4).fill(0));

  for (let i = 0; i < 2; i++) {
    const [row, col] = getRandomCoords(board);

    board[row][col] = 2;
  }

  return board;
};

export const addNewNumbers = (board: number[][]) => {
  const [row, col] = getRandomCoords(board);

  board[row][col] = Math.floor(Math.random() * 10) === 4 ? 4 : 2;

  return board;
};

// TODO: can be kind of improved
const getRandomCoords = (currentBoard: number[][]) => {
  let row: number;
  let col: number;

  do {
    row = Math.floor(Math.random() * 4);
    col = Math.floor(Math.random() * 4);
  } while (currentBoard[row][col] !== 0);

  return [row, col];
};
