import test from "node:test";
import assert from "node:assert/strict";
import { sum } from "../src/sum.js";

test("sum of positives", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("sum of mixed numbers", () => {
  assert.equal(sum([4, -1, 2, -3]), 2);
});
