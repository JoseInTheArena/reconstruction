// Write a function:

// int solution(int A[], int N);

// that, given an array A of N integers, returns 1 if A contains at least two elements which differ by 1, and 0 otherwise.

// Examples:

// 1. Given A = [7], the function should return 0.

// 2. Given A = [4, 3], the function should return 1.

// 3. Given A = [11, 1, 8, 12, 14], the function should return 1. Pair of elements which differ by 1 is (11, 12).

// 4. Given A = [4, 10, 8, 5, 9], the function should return 1. Pairs of elements which differ by 1 are (4, 5), (10, 9) and (8, 9).

// 5. Given A = [5, 5, 5, 5, 5], the function should return 0. There are no two elements in A whose values differ by 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].


export function solution(A) {
    A = A.sort((a, b) => a - b);
    for (let i = 1; i < A.length; i++) {
        if (A[i] - A[i - 1] === 1) {
            return true;
        }
    }
    return false;
}