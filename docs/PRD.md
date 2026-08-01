# Product Requirements Document

## Purpose

A mobile-first web app that allows users to take a photo of a Sudoku puzzle and instantly solve it.

## Core Features

- Capture Sudoku puzzle via mobile camera
- Detect the 9x9 grid from the image
- Extract digits from each cell
- Solve the puzzle using a TypeScript solver
- Display solved grid
- Allow manual correction of OCR mistakes
- Re-solve after corrections

## Non-Goals

- No backend
- No user accounts
- No puzzle history
- No analytics
- No themes or advanced UI customization

## Target User

Mobile users who want a fast, accurate Sudoku solver.

## Constraints

- Must run entirely in the browser
- Must be performant on mobile devices
- Must degrade gracefully if OCR fails