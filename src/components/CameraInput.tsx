import type { ChangeEvent } from 'react';

type CameraInputProps = {
  onCapture: (payload: { file: File; dataUrl: string }) => void;
};

export const CameraInput = ({ onCapture }: CameraInputProps) => {
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const dataUrl = await readAsDataUrl(file);
    onCapture({ file, dataUrl });
  };

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">Capture Sudoku puzzle</span>
      <input
        accept="image/*"
        capture="environment"
        className="block w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-950"
        type="file"
        onChange={handleChange}
      />
    </label>
  );
};

const readAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Failed to read image.'));
    reader.readAsDataURL(file);
  });
