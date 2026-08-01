import type { Cell, Grid } from './types';

export const createEmptyGrid = (): Grid =>
  Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 9 }, (_, col) => ({
      row,
      col,
      value: null,
      confidence: 0,
    })),
  );

export const cloneGrid = (grid: Grid): Grid =>
  grid.map((row) => row.map((cell) => ({ ...cell })));

export const gridToValues = (grid: Grid): (number | null)[][] =>
  grid.map((row) => row.map((cell) => cell.value));

export const valuesToGrid = (values: (number | null)[][]): Grid =>
  values.map((row, rowIndex) =>
    row.map((value, colIndex) => ({
      row: rowIndex,
      col: colIndex,
      value,
      confidence: value === null ? 0 : 1,
    })),
  );

export const setCellValue = (grid: Grid, row: number, col: number, value: number | null): Grid => {
  const next = cloneGrid(grid);
  next[row][col] = {
    ...next[row][col],
    value,
    confidence: value === null ? 0 : 1,
  };
  return next;
};

export const isFilled = (cell: Cell) => cell.value !== null;
