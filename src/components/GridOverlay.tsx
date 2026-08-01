import type { Grid } from '../lib/types';
import { DigitCell } from './DigitCell';

type GridOverlayProps = {
  grid: Grid;
  onCellClick?: (row: number, col: number) => void;
};

export const GridOverlay = ({ grid, onCellClick }: GridOverlayProps) => (
  <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl shadow-slate-950/40">
    <div className="grid grid-cols-9">
      {grid.flatMap((row) =>
        row.map((cell) => (
          <DigitCell
            key={`${cell.row}-${cell.col}`}
            fixed={cell.confidence > 0}
            value={cell.value}
            onClick={onCellClick ? () => onCellClick(cell.row, cell.col) : undefined}
          />
        )),
      )}
    </div>
  </div>
);
