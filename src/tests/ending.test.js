import { describe, it, expect } from 'vitest';
import { solution } from '../ending.js';

describe('ending', () => {
  it('returns true if the string ends with the given ending', () => {
    expect(solution('abc', 'bc')).toBe(true);
    expect(solution('abc', 'd')).toBe(false);
    expect(solution('hello', 'lo')).toBe(true);
    expect(solution('hello', 'he')).toBe(false);
  });
});