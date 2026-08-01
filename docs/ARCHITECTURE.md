# ARCHITECTURE.md
## Frontend‑Only Architecture (Sudoku Solver)

This project is a fully client‑side, mobile‑first web application.  
All computation — image capture, grid detection, OCR, and puzzle solving — runs in the browser.

---

## Tech Stack
- **React + Vite** — lightweight, fast development environment
- **TypeScript** — strict typing for solver and data structures
- **TailwindCSS** — mobile‑first UI styling
- **Tesseract.js** — OCR for digit extraction
- **OpenCV.js** — grid detection and image preprocessing
- **Custom TypeScript Sudoku solver** — backtracking or constraint‑propagation algorithm
- **Optional PWA support** — installable mobile experience

---

## Core Modules

### 1. CameraInput
- Captures image from mobile device camera
- Provides `File` and `dataUrl` for downstream processing

### 2. GridDetector
- Uses OpenCV.js to detect Sudoku boundaries
- Identifies 9×9 cell regions
- Returns an empty `Grid` structure with positional metadata

### 3. DigitExtractor
- Crops each detected cell from the original image
- Uses Tesseract.js to OCR digits
- Populates `value` and `confidence` fields in the `Grid`

### 4. SudokuSolver
- Pure TypeScript solver
- Accepts a partially filled `Grid`
- Returns a solved `Grid` or indicates failure

### 5. SudokuRenderer
- Renders puzzle and solution
- Supports highlighting, corrections, and re‑solve actions

### 6. ManualCorrectionModal
- Allows user to fix OCR mistakes
- Updates the `Grid` and triggers re‑solve

---

## Data Flow

1. **Image Capture**  
   User takes a photo using `CameraInput`.

2. **Grid Detection**  
   `GridDetector` identifies the puzzle boundaries and cell layout.

3. **Digit Extraction**  
   `DigitExtractor` OCRs each cell and returns a populated `Grid`.

4. **Puzzle Solving**  
   `SudokuSolver` computes the solution.

5. **Rendering**  
   `SudokuRenderer` displays the solved puzzle.

6. **Corrections**  
   User fixes OCR mistakes via `ManualCorrectionModal`.

7. **Re‑Solve**  
   Solver re‑runs with corrected values.

---

## Non‑Functional Requirements
- Must run entirely in the browser
- Must perform well on mobile devices
- Must handle OCR failures gracefully
- Must avoid backend dependencies
- Must keep UI simple and responsive

