# API_CONTRACT.md
## Frontend‑Only API Contract (Sudoku Solver)

This project has **no backend**.  
All logic runs entirely in the browser.  
The “API” consists of internal TypeScript modules that operate on image data, grids, and Sudoku logic.

---

## Modules

### 1. GridDetector
Detects the 9×9 Sudoku grid from an input image.

**Function:**
```ts
GridDetector.detect(image: ImagePayload): Promise<Grid>
```

Description:

Accepts a captured image (File + dataUrl)

Uses OpenCV.js to detect the puzzle boundaries

Identifies 9×9 cell regions

Returns a Grid with positional metadata and empty value fields

### 2. DigitExtractor
Extracts digits from each cell of the detected grid.

**Function:**

```ts
DigitExtractor.extract(grid: Grid, image: ImagePayload): Promise<Grid>
```

Description:

Crops each cell region from the original image

Uses Tesseract.js to OCR digits

Populates value and confidence for each cell

Returns an updated Grid

### 3. SudokuSolver
Solves the Sudoku puzzle using a pure TypeScript algorithm.

**Function:**

```ts
SudokuSolver.solve(grid: Grid): SudokuSolution
```

Description:

Validates the grid

Runs a backtracking or constraint‑propagation solver

Returns:

solved: boolean

grid: Grid (fully solved or partially solved)

## Data Types

See `DATA_MODEL.md` for the shared type definitions.

## Notes

- No network calls
- No server
- No tRPC
- No REST or GraphQL
- All modules operate synchronously or via browser-based async libraries