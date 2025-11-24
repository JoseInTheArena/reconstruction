import { describe, it, expect } from 'vitest';
import { solution } from '../longestSubstring.js';

describe('longestSubstring', () => {
  it('returns the length of the longest substring without repeating characters', () => {
    expect(solution('abcabcbb')).toBe(3);
    expect(solution('bbbbb')).toBe(1);
    expect(solution('pwwkew')).toBe(3);
    expect(solution('')).toBe(0);
  });
});