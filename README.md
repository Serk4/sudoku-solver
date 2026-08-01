# Sudoku Solver

A mobile-first, browser-only Sudoku solver scaffold built with React, Vite, TypeScript, and TailwindCSS.

## Features

- Capture a Sudoku puzzle from a mobile camera
- Review and manually correct grid values
- Solve the puzzle in the browser
- Re-run solving after corrections

## Tech Stack

- React
- Vite
- TypeScript
- TailwindCSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

- `src/App.tsx` — main application flow
- `src/components/` — UI components for camera input, grid display, and correction
- `src/lib/` — grid utilities and Sudoku solving logic
- `docs/` — product and architecture notes

## Scope

This project is designed to run entirely in the browser. It does not include a backend, user accounts, puzzle history, or analytics.

