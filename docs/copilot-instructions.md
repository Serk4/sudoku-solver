# copilot-instructions.md
## Purpose
These instructions define strict boundaries for Copilot when generating or modifying code in this project. The goal is to ensure predictable, modular, mobile‑first development for a fully client‑side Sudoku solver.

Copilot must follow these instructions at all times.

---

## Project Scope
This project is a **frontend‑only**, **mobile‑first** web app that:

- Captures a photo of a Sudoku puzzle
- Detects the 9×9 grid
- Extracts digits using OCR
- Solves the puzzle using a TypeScript solver
- Displays the solved grid
- Allows manual correction of OCR mistakes

Copilot must not add features outside this scope.

---

## Hard Boundaries (Do Not Break)
Copilot must **not**:

- Add a backend of any kind (no servers, no APIs, no tRPC, no REST, no GraphQL)
- Add user accounts, authentication, or persistence
- Add puzzle history, storage, or analytics
- Add themes, advanced UI customization, or gamification
- Add difficulty modes, puzzle generation, or extra Sudoku features
- Add libraries not listed in the architecture document
- Add pages not listed in the UI map
- Add data structures not listed in the data model
- Add documentation files beyond the minimal set

If a user request appears to expand scope, Copilot must ask for clarification before proceeding.

---

## Allowed Technologies
Copilot may use only:

- React + Vite
- TypeScript
- TailwindCSS
- Tesseract.js (OCR)
- OpenCV.js (grid detection)
- Custom TypeScript Sudoku solver
- Optional PWA support

No other frameworks, libraries, or runtime environments are allowed unless explicitly approved.

---

## Development Rules
### 1. Mobile‑First
All UI components must be designed for mobile screens first.

### 2. Modularity
Copilot must generate small, focused modules:
- `CameraInput`
- `GridDetector`
- `DigitExtractor`
- `SudokuSolver`
- `SudokuRenderer`
- `ManualCorrectionModal`

Each module must have a single responsibility.

### 3. Ask Before Assuming
If Copilot is unsure about:
- UI behavior
- component structure
- algorithm details
- OCR fallback logic
- grid detection heuristics

It must ask the user for clarification.

### 4. No Over‑Engineering
Copilot must avoid:
- complex state machines
- unnecessary abstractions
- premature optimization
- multi‑layer architecture
- excessive documentation

Keep everything simple and direct.

---

## File Generation Rules
When generating code:

- Keep files small and readable
- Use clear TypeScript types
- Use functional React components
- Use Tailwind for styling
- Keep OCR and OpenCV logic isolated
- Keep solver logic pure and deterministic
- Avoid global state unless necessary

---

## Interaction Rules (Copilot CLI)
When running in interactive mode:

- Copilot must generate **one feature at a time**
- Copilot must not create unrelated files
- Copilot must not restructure the project without explicit permission
- Copilot must not generate documentation unless asked
- Copilot must ask clarifying questions when needed

---

## Error Handling
Copilot must ensure:

- OCR failures produce clear UI messages
- Grid detection failures produce clear UI messages
- Solver failures produce clear UI messages
- All errors degrade gracefully on mobile

---

## Output Expectations
Copilot must produce:

- Clean, minimal React components
- Clear TypeScript types
- Predictable module boundaries
- Mobile‑friendly UI
- Accurate Sudoku solving logic
- Simple, understandable code

Copilot must not produce:

- verbose comments
- unnecessary documentation
- speculative features
- backend code
- unrelated utilities

---

## Final Rule
If any user request conflicts with these instructions, Copilot must ask:

**“This request appears outside the defined project scope. Do you want to expand the scope?”**

Copilot must not proceed until the user confirms.
