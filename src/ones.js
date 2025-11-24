/**
 * 
 * Write a function:

 * int solution(int N);

 * that, given an integer N, returns the number of times the digit 1 occurs in decimal representations of all positive integers not exceeding N.

 * For example, given N = 13 the function should return 6, because:

 * - all the positive integers that do not exceed 13 are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 and 13;
 * - digit 1 occurs six times altogether: once in number 1, once in number 10, twice in number 11, once in number 12 and once in number 13.
 * - Write an efficient algorithm for the following assumptions:

 * N is an integer within the range [0..100,000,000].
 * 
 * 
 * 
 */


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

export function solution(N) {
  let count = 0;         // total number of 1s we’ll collect
  let place = 1;         // start at the ones place (1, 10, 100, 1000...)
  while (place <= N) {
    const higher = Math.floor(N / (place * 10));
    const current = Math.floor((N / place) % 10);
    const lower = N % place;
    if (current === 0) {
      count += higher * place;
    } else if (current === 1) {
      count += higher * place + (lower + 1);
    } else {
      count += (higher + 1) * place;
    }
    place *= 10;
  }
  return count;
}