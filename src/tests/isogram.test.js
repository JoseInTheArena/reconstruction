import { describe, it, expect } from 'vitest';
import { solution } from '../isogram.js';

describe('isogram', () => {
  it('checks if a word is an isogram', () => {
    expect(solution('machine')).toBe(true);
    expect(solution('isogram')).toBe(true);
    expect(solution('hello')).toBe(false);
    expect(solution('')).toBe(true);
  });
});