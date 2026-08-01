# Data Model

## Cell

```ts
type Cell = {
  row: number
  col: number
  value: number | null
  confidence: number
}
```

## Grid

```ts
type Grid = Cell[][]
```

## SudokuSolution

```ts
type SudokuSolution = {
  solved: boolean
  grid: Grid
}
```

## ImagePayload

```ts
type ImagePayload = {
  file: File
  dataUrl: string
}
```

No backend = no database schema.