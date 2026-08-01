import type { Grid } from '../lib/types';
import { createEmptyGrid, setCellValue } from '../lib/grid';

let grid = createEmptyGrid();

const givens: Array<[number, number, number]> = [
  [0, 1, 9],
  [0, 4, 7],
  [0, 7, 3],
  [1, 0, 8],
  [1, 3, 6],
  [1, 5, 9],
  [1, 8, 2],
  [2, 2, 1],
  [2, 6, 6],
  [3, 1, 5],
  [3, 4, 9],
  [3, 8, 7],
  [4, 0, 4],
  [4, 8, 9],
  [5, 0, 7],
  [5, 4, 2],
  [5, 7, 5],
  [6, 2, 7],
  [6, 6, 2],
  [7, 0, 2],
  [7, 3, 8],
  [7, 5, 6],
  [7, 8, 4],
  [8, 1, 6],
  [8, 4, 5],
  [8, 7, 1],
];

for (const [row, col, value] of givens) {
  grid = setCellValue(grid, row, col, value);
}

export const demoPuzzle: Grid = grid;
