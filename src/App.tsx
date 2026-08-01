import { useMemo, useState } from 'react';
import { CameraInput } from './components/CameraInput';
import { GridOverlay } from './components/GridOverlay';
import { ManualCorrectionModal } from './components/ManualCorrectionModal';
import { SudokuRenderer } from './components/SudokuRenderer';
import { demoPuzzle } from './data/demoPuzzle';
import { setCellValue } from './lib/grid';
import { solveSudoku } from './lib/sudoku';
import type { Grid } from './lib/types';

type Step = 'home' | 'review' | 'solution';

const sampleImage = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900"><rect width="900" height="900" fill="#0f172a"/><text x="50%" y="50%" fill="#e2e8f0" font-size="42" font-family="Arial" text-anchor="middle">Puzzle image preview</text></svg>');

export default function App() {
  const [step, setStep] = useState<Step>('home');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [reviewGrid, setReviewGrid] = useState<Grid>(demoPuzzle);
  const [solutionGrid, setSolutionGrid] = useState<Grid>(demoPuzzle);
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);

  const solved = useMemo(() => solveSudoku(reviewGrid), [reviewGrid]);

  const handleCapture = ({ dataUrl }: { file: File; dataUrl: string }) => {
    setCapturedImage(dataUrl);
    setReviewGrid(demoPuzzle);
    setStep('review');
  };

  const handleSolve = () => {
    setSolutionGrid(solved.grid);
    setStep('solution');
  };

  const handleEditCell = (row: number, col: number) => setActiveCell({ row, col });

  const saveCell = (value: number | null) => {
    if (!activeCell) {
      return;
    }

    setReviewGrid((current) => setCellValue(current, activeCell.row, activeCell.col, value));
  };

  const startOver = () => {
    setCapturedImage(null);
    setReviewGrid(demoPuzzle);
    setSolutionGrid(demoPuzzle);
    setActiveCell(null);
    setStep('home');
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-6 px-4 py-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Sudoku Solver
        </p>
        <h1 className="text-3xl font-bold text-slate-50">Capture, correct, solve.</h1>
        <p className="text-sm leading-6 text-slate-400">
          Frontend-only mobile Sudoku solver scaffold.
        </p>
      </header>

      {step === 'home' ? (
        <section className="space-y-4">
          <CameraInput onCapture={handleCapture} />
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-4 text-sm text-slate-400">
            Use your camera to capture a Sudoku puzzle. The OCR and grid detection pipeline will be
            wired in next.
          </div>
        </section>
      ) : null}

      {step === 'review' ? (
        <section className="space-y-4">
          {capturedImage ? (
            <img
              alt="Captured Sudoku puzzle"
              className="aspect-square w-full rounded-3xl object-cover"
              src={capturedImage ?? sampleImage}
            />
          ) : null}
          <GridOverlay grid={reviewGrid} onCellClick={handleEditCell} />
          <button
            className="w-full rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
            type="button"
            onClick={handleSolve}
          >
            Solve Puzzle
          </button>
        </section>
      ) : null}

      {step === 'solution' ? (
        <SudokuRenderer grid={solutionGrid} onEditCell={handleEditCell} onStartOver={startOver} />
      ) : null}

      <ManualCorrectionModal
        open={activeCell !== null}
        value={activeCell ? reviewGrid[activeCell.row][activeCell.col].value : null}
        onClose={() => setActiveCell(null)}
        onSave={saveCell}
      />
    </main>
  );
}
