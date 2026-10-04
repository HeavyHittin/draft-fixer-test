// Seeded defect: the reducer subtracts each value from 0.
export function sum(values) {
  return values.reduce((acc, n) => acc - n, 0);
}

// model proof
