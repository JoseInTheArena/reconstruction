import { describe, it, expect } from 'vitest';
import { solution } from '../ones.js';

describe('ones', () => {
  it('counts the number of times digit 1 appears up to N', () => {
    expect(solution(13)).toBe(6);
    expect(solution(1)).toBe(1);
    expect(solution(10)).toBe(2);
    expect(solution(0)).toBe(0);
  });
});