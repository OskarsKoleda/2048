import { BOARD_SIZE } from "../../../../common/constants.ts";

export const generateInitialBoard = () => {
  const board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0));

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
  let rowIndex: number;
  let colIndex: number;

  do {
    rowIndex = Math.floor(Math.random() * BOARD_SIZE);
    colIndex = Math.floor(Math.random() * BOARD_SIZE);
  } while (currentBoard[rowIndex][colIndex] !== 0);

  return [rowIndex, colIndex];
};
