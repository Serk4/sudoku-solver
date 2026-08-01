export type Cell = {
  row: number;
  col: number;
  value: number | null;
  confidence: number;
};

export type Grid = Cell[][];

export type SudokuSolution = {
  solved: boolean;
  grid: Grid;
};

export type ImagePayload = {
  file: File;
  dataUrl: string;
};
