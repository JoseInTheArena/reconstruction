import { describe, it, expect } from 'vitest';
import { factors } from '../factors.js';

describe('factors', () => {
  it('returns all factors of a number', () => {
    expect(factors(28)).toEqual([1,2,4,7,14,28]);
    expect(factors(1)).toEqual([1]);
    expect(factors(13)).toEqual([1,13]);
  });
});