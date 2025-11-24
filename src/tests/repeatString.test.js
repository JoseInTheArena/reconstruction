import { describe, it, expect } from 'vitest';
import { solution } from '../repeatString.js';

describe('repeatString', () => {
  it('repeats a string n times', () => {
    expect(solution('a', 3)).toBe('aaa');
    expect(solution('abc', 2)).toBe('abcabc');
    expect(solution('x', 0)).toBe('');
  });
});