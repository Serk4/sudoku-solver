import type { Grid, SudokuSolution } from './types';
import { cloneGrid, gridToValues, valuesToGrid } from './grid';

const SIZE = 9;
const BOX = 3;

const isValidPlacement = (board: (number | null)[][], row: number, col: number, value: number) => {
  for (let i = 0; i < SIZE; i += 1) {
    if (board[row][i] === value || board[i][col] === value) {
      return false;
    }
  }

  const boxRow = Math.floor(row / BOX) * BOX;
  const boxCol = Math.floor(col / BOX) * BOX;

  for (let r = 0; r < BOX; r += 1) {
    for (let c = 0; c < BOX; c += 1) {
      if (board[boxRow + r][boxCol + c] === value) {
        return false;
      }
    }
  }

  return true;
};

const solveBoard = (board: (number | null)[][]): boolean => {
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      if (board[row][col] !== null) {
        continue;
      }

      for (let value = 1; value <= 9; value += 1) {
        if (!isValidPlacement(board, row, col, value)) {
          continue;
        }

        board[row][col] = value;

        if (solveBoard(board)) {
          return true;
        }

        board[row][col] = null;
      }

      return false;
    }
  }

  return true;
};

export const solveSudoku = (grid: Grid): SudokuSolution => {
  const board = gridToValues(cloneGrid(grid));
  const solved = solveBoard(board);

  return {
    solved,
    grid: valuesToGrid(board),
  };
};
