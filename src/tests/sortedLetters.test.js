import { describe, it, expect } from 'vitest';
import { solution } from '../sortedLetters.js';

describe('sortedLetters', () => {
  it('removes 3 from "banana" to get "aan"', () => {
    expect(solution('banana')).toBe(3);
  });

  it('removes 0 from "abcdef" (already sorted)', () => {
    expect(solution('abcdef')).toBe(0);
  });

  it('removes 4 from "zyxwv" to get "z"', () => {
    expect(solution('zyxwv')).toBe(4);
  });

  it('removes 2 from "abac" to get "aac"', () => {
    expect(solution('abac')).toBe(1);
  });

  it('removes 1 from "aebc" to get "abc"', () => {
    expect(solution('aebc')).toBe(1);
  });

  it('handles a long sorted string efficiently', () => {
    const longSorted = 'a'.repeat(100000);
    expect(solution(longSorted)).toBe(0);
  });

 });