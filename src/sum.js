// Seeded defect: the reducer subtracts each value from 0.
export function sum(values) {
  return values.reduce((acc, n) => acc - n, 0);
}

// model proof 2
// ci-trigger 2026-10-04T14:14:50.416Z
