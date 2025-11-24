import { describe, it, expect } from 'vitest';
import { solution } from '../uniqueConcat.js';

describe('uniqueConcat', () => {
  it('returns the length of the longest unique concatenation', () => {
    expect(solution(['co', 'dil', 'ity'])).toBe(5);
    expect(solution(['abc', 'yyy', 'def', 'csv'])).toBe(6);
    expect(solution(['potato', 'kayak', 'banana', 'racecar'])).toBe(0);
    expect(solution(['eva', 'jqw', 'tyn', 'jan'])).toBe(9);
  });
});