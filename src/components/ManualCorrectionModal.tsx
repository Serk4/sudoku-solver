import { useEffect, useState } from 'react';

type ManualCorrectionModalProps = {
  open: boolean;
  value: number | null;
  onClose: () => void;
  onSave: (value: number | null) => void;
};

export const ManualCorrectionModal = ({
  open,
  value,
  onClose,
  onSave,
}: ManualCorrectionModalProps) => {
  const [nextValue, setNextValue] = useState(value?.toString() ?? '');

  useEffect(() => {
    if (open) {
      setNextValue(value?.toString() ?? '');
    }
  }, [open, value]);

  if (!open) {
    return null;
  }

  const save = () => {
    const parsed = nextValue.trim() === '' ? null : Number(nextValue);
    onSave(Number.isInteger(parsed) && parsed >= 1 && parsed <= 9 ? parsed : null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-20 flex items-end bg-black/60 p-4 sm:items-center sm:justify-center">
      <div className="w-full max-w-sm rounded-3xl bg-slate-900 p-4 shadow-2xl">
        <h2 className="text-lg font-semibold text-slate-50">Correct cell value</h2>
        <p className="mt-1 text-sm text-slate-400">Enter a digit from 1 to 9, or clear it.</p>
        <input
          autoFocus
          className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-center text-2xl font-semibold text-slate-100 outline-none"
          inputMode="numeric"
          maxLength={1}
          value={nextValue}
          onChange={(event) => setNextValue(event.target.value)}
        />
        <div className="mt-4 flex gap-3">
          <button
            className="flex-1 rounded-2xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
            type="button"
            onClick={save}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
