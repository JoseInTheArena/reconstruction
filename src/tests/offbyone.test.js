import { describe, it, expect } from 'vitest';
import { solution } from '../offbyone.js';

describe('offbyone', () => {
  it('sorts an array of numbers', () => {
    expect(solution([3,1,2])).toEqual(true);
    expect(solution([5,4,3,2,1])).toEqual(true);
    expect(solution([])).toEqual(false);
    expect(solution([1,3,5,7,9])).toEqual(false);
  });
});