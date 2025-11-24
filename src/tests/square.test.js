import { describe, it, expect } from 'vitest';
import { solution } from '../square.js';


  it('returns the square root of a number', () => {
    expect(solution(4)).toBe(2);
    expect(solution(9)).toBe(3);
    expect(solution(0)).toBe(0);
  });
