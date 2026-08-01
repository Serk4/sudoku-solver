type DigitCellProps = {
  value: number | null;
  fixed?: boolean;
  onClick?: () => void;
};

export const DigitCell = ({ value, fixed = false, onClick }: DigitCellProps) => (
  <button
    className={[
      'flex aspect-square items-center justify-center border border-slate-700 text-lg font-semibold transition',
      fixed ? 'bg-slate-800 text-slate-100' : 'bg-slate-900 text-cyan-300',
      onClick ? 'active:scale-95' : '',
    ].join(' ')}
    type="button"
    onClick={onClick}
  >
    {value ?? ''}
  </button>
);
