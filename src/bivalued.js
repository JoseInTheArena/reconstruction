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

// Previous approach
function _solution(A) {
    let currentLength = 0;
    let maxLength = 0;
    let lastSeen = 0;
    const seen = new Map();
    A.forEach(element => {
        if (!seen.has(element)) {
            if(seen.size < 2) {
                seen.set(element, 1);
                currentLength++;
            } else {
                seen.clear();
                seen.set(lastSeen, 1);
                seen.set(element, 1);
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                }
                currentLength = 2;
            }
        } else {
            seen.set(element, seen.get(element) + 1);
            currentLength++;
        }
        lastSeen = element;
    });
    return maxLength > currentLength ? maxLength : currentLength;
}

// Sliding window approach
export function solution(A) {
    let left = 0, right = 0, longest = 0, window = 0;
    const map = new Map();
    for (let num of A){
        //console.log(`Processing num: ${num}`);
        while (map.size > 2 || (map.size === 2 && !map.has(num))){
            //console.log(`Shrinking window from left: ${A[left]}`);
            const count = map.get(A[left]);
            if (count > 1){
                map.set(A[left], count - 1);
            } else {
                map.delete(A[left]);
            }
            left++;
        }
        map.set(num, (map.get(num) || 0) + 1);
        right++;
        window = right - left;
        longest = Math.max(longest, window);
        //console.log(`num: ${num}, left: ${left}, right: ${right}, window: ${window}, longest: ${longest}`);
    }
    return longest;
}