import type { Grid } from '../lib/types';
import { GridOverlay } from './GridOverlay';

type SudokuRendererProps = {
  grid: Grid;
  onStartOver: () => void;
  onEditCell?: (row: number, col: number) => void;
};

export const SudokuRenderer = ({ grid, onStartOver, onEditCell }: SudokuRendererProps) => (
  <section className="space-y-4">
    <GridOverlay grid={grid} onCellClick={onEditCell} />
    <button
      className="w-full rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
      type="button"
      onClick={onStartOver}
    >
      Start Over
    </button>
  </section>
);
