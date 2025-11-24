// We call an array bi-valued if it contains at most two different numbers.
// For example: [4, 5, 5, 4, 5] is bi-valued (it contains two different numbers: 4 and 5), but [1, 5, 4, 5] is not bi-valued (it contains three different numbers: 1, 4 and 5).
// What is the length of the longest bi-valued slice (continuous fragment) in a given array A?

// Write a function:
// int solution(int A[], int N);
// that, given an array A consisting of N integers, returns the length of the longest bi-valued slice in A.

// Examples:

// 1. Given A = [4, 2, 2, 4, 2], the function should return 5, because the whole array is bi-valued.
// 2. Given A = [1, 2, 3, 2], the function should return 3. The longest bi-valued slice is [2, 3, 2].
// 3. Given A = [0, 5, 4, 4, 5, 12], the function should return 4. The longest bi-valued slice is [5, 4, 4, 5].
// 4. Given A = [4, 4], the function should return 2.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].


import { expect, test } from "vitest";
import { solution } from "../bivalued.js";

test("the [4, 2, 2, 4, 2] array is bi-valued and returns 5", () => {
    expect(solution([4, 2, 2, 4, 2])).toBe(5);
})

test("the [1, 2, 3, 2] array returns 3", () => {
    expect(solution([1, 2, 3, 2])).toBe(3);
})

test("the [0, 5, 4, 4, 5, 12] array returns 4", () => {
    expect(solution([0, 5, 4, 4, 5, 12])).toBe(4);
})

test("the [4, 4] array returns 2", () => {
    expect(solution([4, 4])).toBe(2);
})

test('handles a huge array efficiently', () => {
    // Create an array of 100,000 elements alternating between 1 and 2
    const hugeArray = Array.from({ length: 100000 }, (_, i) => (i % 2 === 0 ? 1 : 2));
    expect(solution(hugeArray)).toBe(100000);
  });

test('handles an extremely large array efficiently', () => {
    // Create an array of 10,000,000 elements alternating between 1 and 2
    const hugeArray = Array.from({ length: 10_000_000 }, (_, i) => (i % 2 === 0 ? 1 : 2));
    expect(solution(hugeArray)).toBe(10_000_000);
  });