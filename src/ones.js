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

function solution(N) {
  let count = 0;         // total number of 1s we’ll collect
  let place = 1;         // start at the ones place (1, 10, 100, 1000...)

  // Keep going while there are digits left in N
  while (place <= N) {
    // Split N into three parts:
    const higher = Math.floor(N / (place * 10));  // digits to the left
    const current = Math.floor((N / place) % 10); // the current digit
    const lower = N % place;                      // digits to the right

    // Now we count how many 1s show up in this "column"
    if (current === 0) {
      // The current digit is below 1: only full cycles contribute
      count += higher * place;
    } else if (current === 1) {
      // The current digit is exactly 1: count full cycles + what's left
      count += higher * place + (lower + 1);
    } else {
      // The current digit is bigger than 1: all full cycles plus one more
      count += (higher + 1) * place;
    }

    // Move one digit to the left (ones → tens → hundreds → ...)
    place *= 10;
  }

  return count;
}




let [, , N] = process.argv;
const startTime = Date.now();
const result = solution(parseInt(N, 10));
const endTime = Date.now();
const seconds = ((endTime - startTime) / 1000).toFixed(3);
console.log(`in ${seconds} seconds ${result}`);